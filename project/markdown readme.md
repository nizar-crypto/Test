# Html css notes
- [overview](https://whimsical.com/FSaBfocQoeT6twTFs7LUxF) 
- [The mind map](https://whimsical.com/html-css-nizar-FgVib8fV19XNvUhwN3UtAF)

#### Lesson: Css Change the Color of Text
we write (styling) as in this example:
```html
<h2 style="color: red;">CatPhotoApp</h2>
```
---
####Lesson:  h2 element with inline CSS, which stands for Cascading Style Sheets
- create a CSS selector for all h2 elements instead of individual h2 
```html
<style>
  h2 {
    color: blue;
  }
</style>
```
#### Use a CSS Class to Style an Element)
Create a class and apply a class to an HTML element.
```
<style>
.red-text{

    
    color: red;
  }
</style>
<h2 class=red-text>CatPhotoApp</h2>

``` 
---
[//]:<>(Style Multiple Elements with a CSS Class)
***just give the class you created and apply to the element you want***
---
[//]:<>(Change the Font Size of an Element)
```Inside the same <style> tag contain your class
<style>
  .red-text {
    color: red;
  }
  p{
    font-size:16 px;
  }

```
---
[//]:<>(Set the Font Family of an Element as sans-serif, monospace  )
```
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace ;

  }
```

[//]:<>(Import a Google Font you can see a lot of fonts Family names are case-sensitive )
[//]:<> (Specify How Fonts Should Degrade ,it will chose monospace if lobster isn't available)
```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
```
```css
h2{
  font-family:Lobster,monospace;
}
```
[//]:<>(Size Your Images useing the class in css. IMPORTANT: don't forget to add the class to image element)

```
<style>
  .larger-image {
    width: 500px;
  }
</style>

```
[//]:<>(Add Borders Around Your Elements use a class and the class to the element )
[//]:<>( you can apply multiple classes to an element using a space between them)
```css
  .thick-green-border{
    border-color:green;
    border-width:10px;
    border-style:solid;
  }
```
[//]:<> (Add Rounded Corners with border-radius)
```
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius:10px;

}
```
[//]:<>(Make Circular Images with a border-radius)
```
.thick-green-border {
   
    border-radius: 50%;
  }
```
[//]:<>(Give a Background Color to a div Element)
when you create the class you should assign for example div
```.silver-background {
    background-color:silver;
  }
<div class="silver-background">

```
[//]:<>(Set the id of an Element)
benefits to using id attributes: 
1. You can use an id to style a single element
2. benefits to using id attributes: You can use an id to style a single element
(id attributes should be unique)
3. id is not reusable and should only be applied to one element.
4. id also has a higher specificity (importance) than a class 

```html
<h2 id="cat-photo-app">
```
```css
  #cat-photo-form{
    background-color:green;
  }
```
---
[//]:<>(Adjust the Padding of an Element and margin)
Three important properties control the space that surrounds each HTML element:
 1.padding, 2.border, 3, margin.
 margin controls the amount of space between an element's border and surrounding elements
 -If you set an element's margin to a negative value, the element will grow larger
 ```  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
```
[//]:<>(Add Different Padding to Each Side of an Element)
CSS allows you to control the padding of all four as in the example:
```
  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
```
[//]:<>(also the same for a margin)
when you want to customize an element so
 that it has a different margin on each of its sides
 (you can also specify in one line )(padding-top, padding-right, padding-bottom, and padding-left)
 the same for the margin
```
  .blue-box {
    background-color: blue;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  
  }
or 
padding: 10px 20px 10px 20px;
margin:10px 20px 10px 20px;
```
----
[//]:<>(Use Attribute Selectors to Style Elements)
use the [attr=value There are other CSS Selectors
 you can use to select custom groups of elements to style.
 ```
[type='checkbox'] {
  margin: 10px 0px 15px 0px;
}
```
[//]:<>(Absolute versus Relative Units)
Absolute units tie to physical units of length
Absolute length units approximate the actual measurement on a screen
Relative units, such as em or rem 
you can use it to set the font-size property itself,
```
.red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding:1.5em;

  }
```
[//]:<>(Inherit Styles from the Body Element)
you can style your body element just like any other HTML element
all element will inherit
```
<style>
  body {
    background-color: black;
    color: green; 
    font-family: monospace
  }

</style>
<h1>Hello World</h1>
```
[//]:<>(Prioritize One Style Over Another)
classes will override the body element's CSS
>what can we do to override our pink-text class?
>The second declaration will always take precedence over the first
```
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text{
        color: blue;

  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```
---
[//]:<>(Override Class Declarations by Styling ID Attributes)
id override the classes regardless of where they are declared in your style element CSS.

```
<style>
  body {
    background-color: black;
    font-family: monospace;
  }
  #orange-text{
      color: orange;

  }
  
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
```
[//]:<>(Override Class Declarations with Inline Styles)
<h1 style="color: green;">

 inline styles will override all the CSS declarations in  style element
 ---
 
[//]:<>(Override All Other Styles by using Important)
!important  color declaration overrides all.
```
  .pink-text {
    color: pink !important ;
  }
```
----
[//]:<>(Use Hex Code for Specific Colors)
usually use decimals, or base 10 numbers
Hexadecimals (or hex) are base 16 numbers.
 #000000 =black
```
<style>
  body {
    background-color: #000000;
  }
</style>
```
[//]:<>(Use Hex Code to Mix Colors)
eample:
The digit 0 is the lowest number in hex code, and represents a complete absence of color.

The digit F is the highest number in hex code, and represents the maximum possible brightness
    (you can  Use Abbreviated Hex Code)
    example:
    #FF0000 and #F00
 ---
 [//:<>(Use RGB values to Color Elements)]
  RGB you specify the brightness of each color with a number
   between 0 and 255
   rgb(0, 0, 0) ,rgb(255, 255, 255) white
```
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```
[//]:<>(Create a custom CSS Variable)
**give it a name with two hyphens in front of it and assign** 
```
--penguin-skin: gray;

```
[//]:<>(Use a custom CSS Variable , Attach a Fallback value to a CSS Variable
)
background: var(--penguin-skin);
create your variable, you can assign its value to other CSS properties by referencing the name you gave it.
attach a fallback value that your browser will revert to if the given variable is invalid.
background: var(--penguin-skin, black);
----
[//]:<>(Improve Compatibility with Browser Fallbacks)
t's important to provide browser fallbacks to avoid potential problems.
browser parses the CSS of a webpage, it ignores any properties that it doesn't recognize or support
for example:Internet Explorer will ignore the background color because it does not support CSS variables.
we add background :red;
```
  .red-box {
    background:red;

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
```
[//]:<>(Inherit CSS Variables)
CSS variables are inherited
To make use of inheritance, 
CSS variables are often defined in the :root element.
  **:root is a pseudo-class** selector that matches
   the root element of the document, usually the html element
   ```
<style>
  :root {
    /* Only change code below this line */
--penguin-belly:pink;

    /* Only change code above this line */
  }
  body {
    background: var(--penguin-belly, #c6faf1);
 }
```
variables in :root 
[//]:<>(Change a variable for a specific area)
they will set the value of that variable for the whole page.
Change a variable for a specific area

```
:root {
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }
```
[//]:<>(Use a media query to change a variable)
when your screen is smaller or larger than your media query break point,
 you can change the value of a variable, and it will apply its style wherever it is used.

```
root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }

  @media (max-width: 350px) {
    :root {
      /* Only change code below this line */
    --penguin-size: 200px;
    --penguin-skin: black;
      /* Only change code above this line */
    }
  }

 
```

