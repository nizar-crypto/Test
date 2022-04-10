(flex container)
#####The Flexbox
aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic 
.
----
######the flex layout is to give the container the ability to alter its items’ width/height (and order) to best fill the available space
.flexbox layout is direction-agnostic
###Properties for the Parent
:
>display
```
.container {
  display: flex; /* or inline-flex */
}
``` 
>flex-direction
```
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
.row (default): left to right in ltr; right to left in rtl
.row-reverse: right to left in ltr; left to right in rtl
.column: same as row but top to bottom
.column-reverse: same as row-reverse but bottom to top
####flex-wrap

``` 
allow the items to wrap as needed with this property.


.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}

```
.nowrap: Every item is fit to a single line.
.wrap: Items wrap around to additional lines.
.wrap-reverse: Items wrap around to additional lines in reverse.
.The two properties flex-direction and flex-wrap are used so often together that the shorthand property flex-flow
```
p {
  display: flex;
flex-flow:column wrap
flex-flow: row wrap

}

```
##flex-flow
.The default value is row nowrap.

```
.container {
  flex-flow: column wrap;
}

```
####justify-content
```
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}
flex-start (default): items are packed toward the start of the flex-direction (the rest do as their names)

```
.space-between: items are evenly distributed in the line; first item is on the start line, 
last item on the end line.
.space-around: items are evenly distributed in the line with equal space around them.
.space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.
(he safest values are flex-start, flex-end, and center)
```
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}

```
----

####The safe and unsafe modifier keywords can be used in conjunction with all the rest of these
-----
####align-self

.This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
---
####flex-basis
.This defines the default size of an element before the remaining space is distributed.
```
.item {
  flex-basis:  | auto; /* default auto */
}

```
#Properties for the Children
(flex items)

#### order
.By default, flex items are laid out in the source order
```
.item {
  order: 5; /* default is 0 */
}

```
####flex-grow
.This defines the ability for a flex item to grow if necessary
```
.item {
  flex-grow: 4; /* default 0 */
}

```
####flex-shrink
.This defines the ability for a flex item to shrink if necessary
```
.item {
  flex-shrink: 3; /* default 1 */
}

```
####flex
```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}

```
####align-self
This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
------
####important notice:
 when the flex direction is a column, justify-content changes to the vertical and align-items to the horizontal.
 
----
####more detail about align-content:
takes the following values:

.flex-start: Lines are packed at the top of the container.
.flex-end: Lines are packed at the bottom of the container.
.center: Lines are packed at the vertical center of the container.
.space-between: Lines display with equal spacing between them.
.space-around: Lines display with equal spacing around them.
.stretch: Lines are stretched to fit the container
-----
####HTML <span> Tag
A **<span>** element which is used to color a part of a text:

```
<p>My mother has <span style="color:blue">blue</span> eyes.</p>

```
####HTML <table> Tag
An HTML table consists of one <table> element and one or more <tr>, <th>, and <td> elements
.<tr> element defines a table row
.<th> element defines a table heade
.<td> element defines a table cell.
```
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>

```
####<ul> Tag

The <ul> tag defines an unordered (bulleted) list.

Use the <ul> tag together with the <li> tag to create unordered lists.
```
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
####HTML <video> Tag
.The <video> tag is used to embed video content in a document

.The <video> tag contains one or more <source> tags with different video sources. 
.The browser will choose the first source it supports.

```
<!DOCTYPE html>
<html>
<body>

<h1>The video element</h1>

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>

</body>
</html>

```
####HTML <source> Tag

The <source> tag is used to specify multiple media resources for media elements,
 such as <video>, <audio>, and <picture>
```
<!DOCTYPE html>
<html>
<body>

<h1>The source element</h1>

<p>Click on the play button to play a sound:</p>

<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

</body>
</html>

```
####resources
 [Css tricks flex box guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#background)
 [flex box frog](https://flexboxfroggy.com/)
 [par]