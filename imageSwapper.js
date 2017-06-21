 jQuery.fn.extend({
     hoverImageSwap: function(child, hoverModifier) {
       function getImageSrc(el) {
         return $(el).attr('src')
       }
       function createHoverSrc(src, hoverModifier) {
          return src.split('/').slice(0,-1).join('/') + '/' + src.split('/').pop().split('.')[0] + hoverModifier + '.' + src.split('/').pop().split('.')[1]
       }
       function setImage(el) {
         var currentState = getImageSrc(el)
         var originalState = $(el).data('originalSrc')
         var hoverState =  $(el).data('hoverSrc')
         if (hoverState != currentState) {
           $(el).attr('src', hoverState)
         } else {
           $(el).attr('src', originalState)
         } 
       }
    ///Hover modifier would be like foo.png foo-h.png 'h' being the modifier to pass
       function setHover(parent, child, hoverModifier) {
         $(parent).each(function(i,item) {
           var $child = $(this).find(child);
        // create data of original and hover to be have for swapping//
          $child.data({
            originalSrc: getImageSrc($child),
            hoverSrc: createHoverSrc($child.attr('src'), hoverModifier)
          })
          // bind hover to each child//
          $($child).hover(function() { 
            setImage($child) 
          })
         })
       }
       return setHover(this, child, hoverModifier)
     }
   })
