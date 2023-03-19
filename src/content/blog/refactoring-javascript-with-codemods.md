---
title: Refactoring JavaScript with Codemods
date: '2019-07-05'
pubDatetime: 2023-01-30T15:57:52.737Z
category: 'Software'
tags:
  - Front-end
  - JavaScript
  - Codemods
description: "Codemods are handy for automating large-scale changes. In this article, I'll share more about codemods, walk through a simple codemod that I wrote, and share some tips for debugging."
featured: true
---

One of the most exciting parts about working with JavaScript is the fast-paced nature of the ecosystem. New patterns and standards evolve over time. However, keeping up with the changes can be complex and time-consuming because they may involve large-scale modifications or refactors that are a bit more involved than a simple find-and-replace.

Fortunately, codemods are a handy tool that help us automate these changes. In this article, I'll share more about codemods, walk through a simple codemod that I wrote, and share some tips for debugging.

#What are codemods?
Codemods are scripts that automate a code change. They're usually comprised of two parts:

1. Find all instances of the code to be changed, most easily accomplished with some form of pattern matching
2. Apply a transformation to each instance, usually based on the original instance but with some modifications

#When can I use codemods?
I mentioned large-scale refactors earlier — these can happen when upgrading versions of packages where existing methods are deprecated or new methods are introduced. They can also be used for syntax improvements or linting fixes.

For example, in my current role at Gusto, we've used codemods to fix ESLint errors (more on this below) and move off deprecated React features.

#How do I write one?
To demonstrate how to write a codemod, I'll walk through an example I wrote to fix an ESLint error. I assume a basic understanding of JavaScript, React, and tree data structures. I'll also talk about <a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree" target="_blank">ASTs (Abstract Syntax Trees)</a> but prior knowledge is not a required.

##Context
At Gusto, we added ESLint to our codebase after we had already written a bunch of React components. However, some of our existing components did not match the ESLint rules that we decided to enforce. To avoid having those errors block us from adding ESLint, we suppressed the existing errors and added ESLint so it could immediately start having value for our new code going forward.

One of the errors we suppressed is `react/destructuring-assignment`, which prefers using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">ES6 destructuring syntax</a> when possible. For example:

```js
const { mailingAddress: address } = this.props;
```

is preferred to

```js
const address = this.props.mailingAddress;
```

There are a bunch of components in our codebase that do not destructure and have the destructuring-assignment rule suppressed. I'll walk through a codemod I wrote to address the specific case above. Note that this is just one example and it doesn't cover _all_ the violations of the destructuring-assignment rule. When writing codemods, I've found that it's simplest to start with the basic cases and gradually add on more complex cases.

##Step 0: Boilerplate code
The <a href="https://github.com/facebook/jscodeshift" target="_blank">jscodeshift</a> package allows us to write codemods for JavaScript. To get started, we can use the following boilerplate code:

```js
module.exports = function(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Step 1: Find all instances of the code to change
  const instances = root.find(…);

  // Step 2: Apply a code transformation and replace the code
  instances.forEach(instance => {
    j(path).replaceWith(…);
  });
  return root.toSource();
}
```

##Step 1: Find all instances of the code to change
To accomplish step 1, we'll use pattern matching with AST (abstract syntax tree). AST allows us to represent code as a tree where each syntactic pattern is represented as a node, perhaps as a subtree of other nodes or with its own children nodes. There is a handy website called <a href="https://astexplorer.net/" target="_blank">AST Explorer</a> that we can use to visualize code as an AST.

Let's see what the AST structure looks like for our example code snippet:

![AST part 1](/step1-ast.png)

The overall expression is a `VariableDeclaration` that has a `kind` of `const`, since we declared the variable with `const`, and a single `VariableDeclarator` for everything after the `const` keyword.

This `VariableDeclarator` in turn has two children. The first is the `id` or how the variable is named, in this case it's an `Identifier` that's named `address`. The second is the `init` or how the variable is initialized, in this case it's a `MemberExpression` for `this.props.mailingAddress`.

Breaking down the `MemberExpression` further, we can see that it's comprised of a second `MemberExpression` to capture `this.props` and an `Identifier` to capture `mailingAddress`. The inner `MemberExpression` containing `this.props` can be broken down even further into a `ThisExpression` for the `this` keyword and an `Identifier` property with the name `props`.

If this is hard to see, you can open the <a href="https://astexplorer.net/" target="_blank">AST Explorer</a> and hover over different parts of the input code, which will highlight the corresponding AST nodes on the right side.

We can use the `find` method from jscodeshift and pass in a pattern based on what we see in the AST explorer. Here's what that looks like:

```js
const instances = root.find(j.VariableDeclarator, {
  id: {
    type: 'Identifier',
  },
  init: {
    object: {
      type: 'MemberExpression',
      object: {
        type: 'ThisExpression',
      },
      property: {
        name: 'props',
      },
    },
    property: {
      type: 'Identifier',
    },
  },
});
```

At this point, it's good to sanity check that our search works as expected. To do so, I like to test the codemod on one file. Let's say we have the following example component that does a bunch of things, including displaying an address from the props:

```js
class ExampleComponent extends React.Component {
  // other interesting behavior
  render() {
    const address = this.props.mailingAddress;
    return (
      <>
        // other components
        <AddressDisplay address={address} />
        // other components
      </>
    );
  }
}
```

We can run our codemod and add some `console.log` statements to ensure that it's finding the correct lines.

To run the codemod, you'll need the jscodeshift CLI:

```
jscodeshift -t ~/path/to/codemod.js ~/path/to/component.jsx
```

-t specifies to transform the code.

Adding logging:

```js
console.log(instances.length); // outputs 1
```

Not convinced? We can dig into the instance and log some of the properties, for example the name:

```js
console.log(instances[0].get('id').node.name); // outputs address
```

Great! Looks like it's finding what we're expecting. Let's move on to step 2.

##Step 2: Apply a transformation and replace the code
To figure out how to represent our target code, we'll go back to the AST explorer. This time, our input will be our desired code.

![AST part 2](/step2-ast.png)

Again, our main output is a `VariableDeclaration` of `const` kind with a `VariableDeclarator`, but the `VariableDeclarator` subtree is different. For the `id`, instead of the name of the variable, we have an `ObjectPattern` to represent a JavaScript Object. The properties of the object are an array for each key/value pair. For our example, there is a single `Property` with a key of `address` and a value of `mailingAddress`.

For the `init`, we have a `MemberExpression` that matches the inner `MemberExpression` from the first step, which makes sense because the expression to the right of the equals sign in our target code is simply `this.props`.

Now let's translate this into our replace method. We can learn what the inputs are for each type by looking at the type definitions in the <a href="https://github.com/benjamn/ast-types/blob/master/def" target="_blank">ast-types library</a>. The fields for each type correspond to its arguments.

Our `ObjectPattern` has one `Property` for the one key/valule pair. We can pull the names from the instance:

```js
const variableName = instance.get('id').node.name;
const propName = instance.get('init').node.property.name;
```

Then we can use these as inputs into our `ObjectPattern`:

```js
j.objectPattern(
  [
    j.property('init', j.identifier(propName), j.identifier(variableName)),
  ],
),
```

Next we'll build the `MemberExpression` by looking at the type and seeing what the inputs are.

```js
j.memberExpression(j.thisExpression(), j.identifier('props'));
```

Combining these, we get our replace step:

```js
instances.forEach((instance) => {
  const variableName = instance.get('id').node.name;
  const propName = instance.get('init').node.property.name;
  j(instance).replaceWith(
    j.variableDeclarator(
      j.objectPattern([
        j.property('init', j.identifier(propName), j.identifier(variableName)),
      ]),
      j.memberExpression(j.thisExpression(), j.identifier('props')),
    ),
  );
});
```

Let's run our codemod on our test component again and see what happens:

Output:

```js
class ExampleComponent extends React.Component {
  // other interesting behavior
  render() {
    const { address: mailingAddress } = this.props;
    return (
      <>
        // other components
        <AddressDisplay address={address} />
        // other components
      </>
    );
  }
}
```

It's _almost_ what we expect, but there are line breaks inside the object. Upon digging into the <a href="https://github.com/benjamn/recast/blob/52a7ec3eaaa37e78436841ed8afc948033a86252/lib/printer.js#L575" target="_blank">recast library</a> that jscodeshift uses to print, it looks like line breaks are built in to how `ObjectPattern` is printed.

Additionally, if we have a case where the variable name and prop name are the same, ESLint will complain further that we can use the object shorthand syntax:

```js
const { address: address } = this props; // Angry ESLint
const { address } = this.props; // Happy ESLint
```

Fortunately, both of these issues can be fixed with ESLint's fix option. The shorthand error can also be addressed by extending our codemod — the `ObjectPattern` type accepts a shorthand parameter that applies if the variable name and prop name are the same. However, since we'll be using the ESLint auto-fix feature anyway, I'd prefer to just let ESLint fix it for us.

```
eslint --fix ~/path/to/component.jsx
```

There you go! It's definitely a process that involves a lot of trial and error, console logging, and back and forth between the code and the AST explorer, but it can end up being more efficient and saving more time than manually applying a transformation.

##Debugging tips

- `console.log` is your friend! I haven't found a way to get a debugger (if you know a way, please let me know!), so I've been relying heavily on logging at every step to verify the behavior. Logging `Object.keys` and `Object.entries` has been especially useful in seeing all the available properties.
- Use the AST explorer! Writing codemods would be almost impossible without some way of visualizing code as an AST.
- When you're at the replace step, ensure that you're passing in the correct arguments to the node types that you're building. You can look at the type definitions in the `ast-types` repo for all the type annotations.
- Make sure you are using the correct parser setting. We use Flow in our JavaScript so I include `parser=flow` in all my `jscodeshift` commands.
- Look at existing codemods, there are some great examples in the <a href="https://github.com/reactjs/react-codemod" target="_blank">react-codemod</a> library. If you're looking to apply a transformation, check online to see if someone has already written something similar.

# Reference

All of the links from inside the article:

- <a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree" target="_blank">ASTs (Abstract Syntax Trees)</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">ES6 destructuring syntax</a>
- <a href="https://github.com/facebook/jscodeshift" target="_blank">jscodeshift</a>
- <a href="https://astexplorer.net/" target="_blank">AST Explorer</a>
- <a href="https://github.com/benjamn/ast-types/tree/master/def" target="_blank">AST type definitions</a>
- <a href="https://github.com/reactjs/react-codemod" target="_blank">react-codemod</a>

Lastly, here's the codemod in its entirety:

```js
module.exports = function (file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Step 1: Find all instances of the code to change
  const instances = root.find(j.VariableDeclarator, {
    id: {
      type: 'Identifier',
    },
    init: {
      object: {
        type: 'MemberExpression',
        object: {
          type: 'ThisExpression',
        },
        property: {
          name: 'props',
        },
      },
      property: {
        type: 'Identifier',
      },
    },
  });

  // Step 2: Apply a code transformation and replace the code
  instances.forEach((instance) => {
    const variableName = instance.get('id').node.name;
    const propName = instance.get('init').node.property.name;
    j(instance).replaceWith(
      j.variableDeclarator(
        j.objectPattern([
          j.property(
            'init',
            j.identifier(propName),
            j.identifier(variableName),
          ),
        ]),
        j.memberExpression(j.thisExpression(), j.identifier('props')),
      ),
    );
  });
  return root.toSource();
};
```
