---
title: Celebrating Pride with CSS
date: '2019-05-23'
tags:
  - Front-end
  - CSS
description: "Let's make a rainbow!"
---

With Pride month approaching, I want to see if I can add some pizzazz to Hippo, one of the products I work on at Gusto. Our operations teams use Hippo internally to manage the benefits information for our customers. Each customer has a corresponding display page and next to the customer's name, we display list of labels for each state that the customer operates in. My goal is to turn these drab state labels into a colorful rainbow.

Here’s what it currently looks like.

![State labels](/state-labels-gray.png)

My first thought is to add CSS helper classes for the different colors and use Ruby to determine when to apply each class. We currently use a Rails view with embedded ruby for the state labels. Here’s a code snippet:

```erb
<% states.each do |state| %>
  <span class="label state"><%= state %></span>
<% end %>
```

We have our `states` variable which is an array of state abbreviations, e.g. `['CA', 'NJ', 'NY']`. We loop through each state to display a span element with the label and state classes and the state name inside the element.

Let’s say we have the following CSS helper classes. Note that I’m using SASS variables (denoted by the `$`) for readability, but any color value or hex code will work.

```css
.red {
  background-color: $red;
}
.orange {
  background-color: $orange;
}
.yellow {
  background-color: $yellow;
}
.green {
  background-color: $green;
}
.blue {
  background-color: $blue;
}
.indigo {
  background-color: $indigo;
}
.violet {
  background-color: $violet;
}
```

Ruby has a method called `each_with_index` that gives us the index of the element as the second parameter of the block. It looks like we can use the index to determine the class. For example, an index of 1 would be red, an index of 2 would be orange, and so on.

```erb
<% states.each_with_index do |state, index| %>
  # Nest ternary for each color
  <span class="label state <%= (index == 1) ? 'red' : '...' %>"><%= state %></span>
<% end %>
```

Functionally this would work, but nesting that many ternaries makes the code incredibly hard to read and it feels like we are stuffing too much logic into the view. Fortunately, we can accomplish this rainbow **entirely with CSS**. CSS3 added the `nth-child` selector that allows targeting DOM elements based on their position, e.g. the first child. We can chain the `nth-child` selector onto the `state` class that we declare in our view.

Let’s try this:

```css
.state:nth-child(1n) {
  background-color: $red;
}
.state:nth-child(2n) {
  background-color: $orange;
}
.state:nth-child(3n) {
  background-color: $yellow;
}
.state:nth-child(4n) {
  background-color: $green;
}
.state:nth-child(5n) {
  background-color: $blue;
}
.state:nth-child(6n) {
  background-color: $indigo;
}
.state:nth-child(7n) {
  background-color: $violet;
}
```

After refreshing the page, we get this:

![State labels](/state-labels-rainbow-7.png)

It looks like the seven state labels are a rainbow. Great, that was straightforward!

To sanity check, let’s test on a company with more than 7 states.

![State labels](/state-labels-off-rainbow.png)

Hmmm, not quite right. It starts off as a rainbow but quickly diverges.

I’ll pause here and give you a chance to see if you can spot the bug in my code.

--

Spot the issue? It's ok if you don't, it took me a while. Let's step through it:

The colors rendered are:

1. Red
2. Orange
3. Yellow
4. Green
5. Blue
6. Indigo
7. Violet
8. Green
9. Yellow
10. Blue
11. Red
12. Indigo
13. Red
14. Violet

When using `n` in a pattern passed into `nth-child`, the style applies to every element whose position matches that pattern for every positive integer or zero value. For example, looking at `3n`, passing in every positive integer or zero as `n` gives us 0, 3, 6, 9, 12, effectively every third element.

How are the colors for this 14-state list determined? The first seven work as expected. The eighth element, the `1n`, `2n` and `4n` rules apply to it, but the `4n` rule is declared later in the CSS file so it wins the CSS specificity test. The ninth element, the `1n` and `3n` rules apply to it but the `3n` rule wins the specificity test. The remaining elements also follow a similar pattern. Note that `1n` effectively becomes the fallback style for every element.

Let’s try this again, this time <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child" target="_blank">reading the documentation</a> carefully. The `nth-child` selector accepts an expression of `An + B` where `A` is the length of the repeating pattern and `B` is a shift in the pattern. For our rainbow, we have a repeating pattern of seven colors, so `A` is 7. DOM elements are 1-indexed so `B` is 1 for the first color, 2 for the second color, and so on. Putting this all together, we get:

```css
.state:nth-child(7n + 1) {
  background-color: $red;
}
.state:nth-child(7n + 2) {
  background-color: $orange;
}
.state:nth-child(7n + 3) {
  background-color: $yellow;
}
.state:nth-child(7n + 4) {
  background-color: $green;
}
.state:nth-child(7n + 5) {
  background-color: $blue;
}
.state:nth-child(7n + 6) {
  background-color: $indigo;
}
.state:nth-child(7n + 7) {
  background-color: $violet;
}
```

And the final result:

![State labels](/state-labels-final-rainbow.png)

Happy Pride!
