# ember-toolbars

This addon manages animated, fixed-position toolbars on any edge of the viewport. What you put inside the toolbars and how you style them are entirely up to you.



## Installation

* `ember install ember-toolbars`

n## Usage

Wrap your content inside the ember-toolbars component. Most often you will want to do this within `application.hbs`, like:

```hbs
{{#ember-toolbars}}
  {{outlet}}
{{/ember-toolbars}}
```

Then whenever you want to display a toolbar, use any of these components:

 - in-left-toolbar
 - in-top-toolbar
 - in-right-toolbar
 - in-bottom-toolbar
 
 Each one accepts a `show` argument that should be a component to show in that toolbar. For example:

```hbs
{{in-left-toolbar show=(component "your-component-name") }}
```

Since you're using Ember's built-in `component` helper, you can also pass arbitrary arguments or actions to your component, just as if it was rendering in place:

```hbs
{{in-bottom-toolbar show=(component "media-chooser" images=model.images choseImage=(action "saveImage")) }}
```

## Making Horizontal Space for Toolbars

The `ember-toolbars` component adapts its margins to make room for whatever toolbars are on screen. This means that the content inside of it will have less room when the sidebars are present. For vertical space, this is relatively easy. The top toolbar pushes your content downward, and the bottom toolbar adds a margin to your content so that users can always scroll to the bottommost content without it being obscured.

Horizontal space is subject to more tradeoffs, so you have several choices for how you want to adapt.

If you do nothing special, your content will simply get resized smaller. Text will reflow, etc.

If you give you content a fixed width (like `100vw` or `800px` or `40em`), it will slide to the right to make room for the left sidebar. For example:

{{#ember-toolbars}}
  <div style="width: 100vw">
    {{sample-content}}
  </div>
{{/ember-toolbars}}

If you give you content a fixed width and `float: right`, it will slide to the left to make room for the right sidebar. You should clear the float so that `ember-toolbars` bottom margin will still work correctly, like:

```hbs
{{#ember-toolbars}}
  <div style="width: 100vw; float: right">
    {{sample-content}}
  </div>
  <div style="clear: both"></div>
{{/ember-toolbars}}
```

If you want your content to scale down to match the available space, you can use the [squishable-container]() addon:

{{#ember-toolbars}}
  {{#squishable-container}}
    {{sample-content}}
  {{/squishable-container}}
{{/ember-toolbars}}
