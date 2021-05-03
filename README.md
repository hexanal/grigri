# grigri -> v0.4.20

**grigri** is a set of utility classes, mixins, and variables to build grid-like layouts.

## Demo

[Live Demo](https://fredmercy.ca/files/grigri)

> this includes "helpers", which I've removed from this repo (I will eventually update the example page)

## What's included?

### Centering

- use the `.container` class, which does the following:
  - centers a div
  - gives it a width equal to `var(--max-width)`
  - adds side paddings
- use the classes `.wide` or `.narrow` in combination with it to break from the default width
- use the `.flush` to remove the side paddings (content will extend to the side of the screen on smaller screens)

### Columns

- use the boostrap-like classes you know (and love?) to make columns happen:
  - a `.row` class on the parent element
  - a set of `.col` classes, e.g. `<div class="col col-sm-6 col-lg-3">...</div>`
- use a `.no-gutters` class to ignore the space between the items (this effectively breaks from the grid's "rhythm")

### Grid

- use `.grid` to enable a grid layout (it uses `display: grid` and adds *gutters*)
  - to display **4 items** on a row, use `.grid-4`
  - to display them only once we hit the `$mq-md` breakpoint, use `.grid-md-4`
  - to display **3 items**, use `.grid-3`, and so on... easy

### Vertical spacing

- use `.spacing` to add margins (top & bottom) to an element, which uses the variable `var(--spacing)`
  - use `.spacing-2` / `.spacing-3` / `.spacing-4` to select different margin sizes
- you can also use `.spacing-top` or `.spacing-bottom`, with the same number modifiers
