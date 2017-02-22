$(document).ready(function() {
		var mq = window.innerWidth;
		///As the name describes this is an image swapping api
		var imageSwap = (function () {
			var url = "";///Put the path to the images here: example.com/assets/images/
			function swap(name) {
				var newimage = url + name;
				document.querySelector('.swap-image').src = newimage
			}
			function imagesToSwap() {
				if (mq <= 992) {
					imageSwap.swap("mobile-home-image.jpg");///Images that you want swapped---Mobile
				} else {
					imageSwap.swap("home-image.jpg")///Images that you want swapped---Desktop
				}
			}
			function checkResolution() {
				$(window).resize(function () {
					mq = window.innerWidth;
					imagesToSwap();
				});
				imagesToSwap();
			}
			return {swap: swap, onLoad: checkResolution}
		})();
		imageSwap.onLoad();	///Call this to ensure that on load of the dom, the proper image is placed based off client width.  
	});
