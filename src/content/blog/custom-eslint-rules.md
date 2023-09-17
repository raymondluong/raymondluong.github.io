---
title: How to create custom ESLint rules with TypeScript and without publishing to NPM
date: '2023-05-20'
tags:
  - Front-end
  - ESLint
description: 'Learn what custom rules are, why you might want to use them, and how to set them up without going through the whole rigamarole of publishing an NPM package.'
---

[ESLint](https://eslint.org/) is one of my favorite packages because it can enforce coding conventions and manage the natural entropy of codebases with multiple contributors. One underrated feature is the ability to leverage custom rules specific to a given codebase. In this post, I will explain what custom rules are, why you might want to use them, and how to set them up without going through the whole rigamarole of publishing an NPM package.

## What are custom rules and why are they useful?

Simply, custom ESLint rules are rules that are not included in the [standard set of rules](https://eslint.org/docs/latest/rules/) from the main `ESLint` package or any existing plugins (e.g. `eslint-plugin-react`).

Custom rules can be useful in several scenarios:

- When you want to apply different error severities for the same rule.
- When you need to write a codebase-specific rule that might not fit with a plugin.
- When you need to fork an existing rule.

One limitation of ESLint rules is that each rule can only have [one severity level](https://eslint.org/docs/latest/rules/) (off, warn, error). However, there are scenarios where you might want finer granularity and both warn and error for violations of the same rule. For example, one of my overarching projects at Gem is migrating from `react-bootstrap` to our own internal component library. For fully migrated components, I want to error on those imports to prevent them from being used entirely. For components that are in the process of being migrated, I just want to warn so that a message will show up in editors to encourage migration. But I don’t want to entirely prevent those imports from being used yet, in case there are bugs or missing features in our own internal component library’s version of the component.

Another scenario is authoring a custom rule that is specific to your codebase. Each codebase has its unique quirks and dusty corners (you know what talking about) and sometimes a standard rule just doesn’t apply. For example, a specific coding convention or pattern that you’re trying to move away from. Don't worry if you're not familiar with the process - there are plenty of resources online to guide you through it. The [official ESLint guide to custom rules](https://eslint.org/docs/latest/extend/custom-rules){:target="\_blank"} is a great place to start.

Lastly, a custom rule is handy if you want to use a rule but want to change some of its internals. For example, I forked the `only-export-components` rule from [`eslint-plugin-react-refresh`](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)) as part of a larger project to migrate to Vite. I wanted to modify some of the scenarios it errored on as well as change some of the error messages. By forking the rule, I could create a modified copy with the changes I need. For situations like these, ideally it would be best to create a pull request for the main repo and make an open-source contribution. However, that process can take time, and forking the rule until the pull request is merged is a great workaround. Additionally, forking can also be beneficial in situations where you want to experiment with the rule.

## Why do I want to use TypeScript for this?

Technically you don’t need it! I first learned how to set up custom rules with vanilla JS in [this blog post by Steven Petryk](https://stevenpetryk.com/blog/custom-eslint-rules/). However, I found myself needing to fork the `only-export-components` rule from `eslint-plugin-react-refresh` that was written in TypeScript and, with TypeScript’s increasingly popularity and adoption, thought this would be an increasingly common scenario. So I decided to migrate the setup to TypeScript as well.

## What’s the benefit of not publishing to NPM?

The biggest benefit is velocity! By having the custom rules live in the same repo as the code you’re working with, you can move a lot faster than the overhead of publishing a package. However, this approach won’t work if you need to share your ESLint config across multiple repos (unless you’re ok with copying and pasting).

## I’m on board! How do I set this up?

Hopefully you now have a sense of what custom rules are and why they are useful! Let’s actually set them up.

To house your custom rules, create a new directory and an `index.js` file:

```jsx
require('ts-node').register();

const projectName = 'project-name';

const configs = {
  all: {
    plugins: [projectName],
  },
};

const rules = require('./index.ts').default;

module.exports = { configs, rules };
```

This is the only Vanilla JS and CommonJS file we'll need. For the rest, we can use TypeScript and ESM! To achieve this, we use `ts-node` on line 1 (add it to your `devDependencies` if it’s not already there).

Next, create the rule files and the `index.ts` file.

```jsx
import { Linter } from 'eslint';

export const copiedRule = new Linter().getRules().get('no-restricted-imports');
```

```jsx
import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator((name) => name);

export const customRule = createRule({...});
```

```jsx
import { copiedRule } from './copiedRule';
import { customRule } from './customRule';

const rules = {
  'copied-rule': copiedRule,
  'custom-rule': customRule,
};

export default rules;
```

Next, add the following to `devDependencies` in `package.json`:

- `"eslint-plugin-project-name": "link:./custom-rules-directory"`
- `"eslint-config-project-name": "link:./custom-rules-directory"`

Also, make sure to add `ts-node` if it is not already present.

Next, in your ESLint config file (e.g. `.eslintrc.js`):

- Add the name of your plugin to the `plugins` array, for example: `plugins: [react, graphql, project-name]`
- Enable the rules that you copied or created, for example: `rules: { 'copied-rule': 'error', 'custom-rule': 'warning' }`

That's it! If you use the ESLint extension in your editor, you may need to restart the server to see your changes. Otherwise, you can use the [standard ESLint CLI](https://eslint.org/docs/latest/use/command-line-interface) to test out your new rules.
