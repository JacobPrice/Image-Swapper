# Image-Swapper

This is a very simple jQuery plugin. 

Sample layout: 
```html
<main>
  <div class="icon">
    <img src="images/bear.jpg" alt="bear">
  </div>
  <div class="icon">
    <img src="images/turtle.jpg" alt="turtle">
  </div>
  <div class="icon">
    <img src="images/fish.jpg" alt="fish">
  </div>
</main>
```

The plugin extends jQuery, therefore it is obviously needed, but it allows us to use jQueries selector api.

The plugin takes two arguments:


`childElement` - this is the element to swap the src of, Img in the example above.



`hoverModifier` - this will be appended to the initial src of the image. 




Let's assume you had another image for Bear to display on hover. You would name the image bear`modifier`.jpg. ex: bear-h.jpg


```javascript
.hoverImageSwap(childElement, hoverModifier)
```

So above lets say I wanted every image to swap on hover. 


I'd name the images bear-h.jpg, turtle-h.jpg, fish-h.jpg. 


Then the code would look like this



```javascript


$('.icon').hoverImageSwap('img', '-h')
```
