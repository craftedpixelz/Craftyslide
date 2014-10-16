Craftyslide - A tiny jQuery slideshow plugin
============================================

About
-----

Craftyslide is a tiny (just 3kb) slideshow built on jQuery. Craftyslide aims to be different, by providing a simple, no-frills method of displaying images; packaged into a small, clean and efficient plugin.

Usage
-----

HTML

	<div id="slideshow">
		<ul>
			<li>
				<img src="image1.jpg" title="Lorem ipsum dolor sit amet" />
			</li>
    
			<li>
				<img src="image2.jpg" title="Lorem ipsum dolor sit amet" />
			</li>
    
			<li>           
				<img src="image3.jpg" title="Lorem ipsum dolor sit amet" />
			</li>	                         
		</ul>
	</div>

Simply create a div which houses a ul containing your list of images (add an optional title to create captions), then include the supplied JS/CSS files. That's all there is to it!

Scripts:

	<link rel="stylesheet" href="css/craftyslide.css" />
	<script src="js/craftyslide.js"></script>

Basic Initialization:

	<script>
		$("#slideshow").craftyslide();
	</script>

Options
-------


### width (number)

Set a custom width for your slideshow.

### height (number)

Set a custom height for your slideshow

### pagination (true/false)

Select whether to display pagination or not. Setting to false hides pagination and enables auto mode. If set true and delay is set, autoPaginate will be enabled.

### fadetime (number)

Define the fade animation speed of slides.

### delay (number)

Defines the delay between each slide being shown. If set with pagination = true, autoPaginate is enabled.

### Options example:

	$("#slideshow").craftyslide({
		'width': 640,
		'height': 400,
		'pagination': false,
		'fadetime': 500,
		'delay': 2500
	});


License
-------

Copyright (c) 2011 Crafted Pixelz
Licensed under the MIT license