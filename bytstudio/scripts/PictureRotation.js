var imageCount  = 15;
var imageNumber = 15;

function switchImage() {
	var message = "<img src=\"./pictures/" + imageNumber + ".jpg\" width=\"auto\" height=\"auto\">";
	document.getElementById("imageHolder").innerHTML = message;
	if(imageNumber < imageCount) {
		imageNumber += 1;
	}
	else {
		imageNumber = 1;
	}
}

/* setInterval calls a function within provided time range. 
   This time 9000ms is set as default.
*/
setInterval('switchImage()', 9000);
