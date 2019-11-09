# DEVICE template specification

## 1. Common technical requirements
* Markup standards: HTML5, CSS3, progressive improvement; 
* Grid: defined in layout;
* Adaptive markup: none;
* Framework use: none;
* Cross browsing: IE11+, Chrome, Firefox, Opera, Safari;
* Typography: partially defined in layout (other - at the developer discretion);
* Font used: Gilroy, Open Sans; 
* Use styleguide.psd, which contains drawing states of interface elements. If there is a difference, styleguide.psd has the highest priority.

## 2. Explanation for the students
* Layout has hidden layers with popups. Such layers in photoshop highlighted by blue color; 
* Layout marked up gradually, no need to do all requirements immediately; 
* In section «Mandatory requirements» below described blocks behavior, which needs to be implemented to receive admission. Requirements from the «Additional requirements» section could be done at will for performing additional criterions.

## 3. Mandatory requirements

### All layouts:
* Content block centered and can't be less than layout width;
* Different blocks authorization for guests and users (see index.psd and catalog.psd layouts);
* In authorized user block - user name and user icon are links, which leads to user profile;
* Academy logo in footer leads on [«Professional HTML & CSS, level 1»​](https://htmlacademy.ru/intensive/htmlcss)  landing page of intensive. 

### device-index.html:
* Blocks with section names («virtual reality», «selfie monopods», etc.) are links, which leads to catalog sections;
* Promo-slider: slider. Markup all of the sliders is mandatory. Slider animation is optional, animation concept described in the 4-th section; 
* Services block («delivery», «warranty», «credit»): slider. Markup all of the sliders is mandatory. Slider animation is optional, animation concept described in the 4-th section; 
* Map block: sufficient implementation - regular image, click leads on maps service;  
* Markup of modal window is mandatory (see layer folder «write us»).

### device-catalog.html:
* Logo is a link on the main page; 
* Filter section needs to markup up with form, button «Show» is responsible for the form sending;
* Block «Price»: cursor pointer appears, when you hover over any markers, make markers animations is optional, price must not change;
*  When hovering over product card, the buttons «add to cart» and «add to compare» appears (see styleguide.psd). Product name is a link, which leads to separate page (no need to markup separate page);
* Product quantity in the right section can be any, at the same time page shouldn't be broken;
* Any product might have a label «new».

## 4. Additional requirements

### device-index.html: 
* Promo slider: slider animation. Slider changes happen instantly, without intermediate transitions (some of the layers are hidden - see layers highlighted by red color);
* Services block («delivery», «warranty», «credit»): slider animation. Tab slider works similarly to the promo slider block. After tab clicking slider changes instantly;
* Block with map: implementation at will - after clicking, a fullscreen interactive map popup appears (see layer folder «map hover»), popup window position must be relative to the viewport, not to the page.
* After clicking on the button «Write us», a modal window appears (see layer folder «write us»), modal window position is relative to the viewport, not to the page.

### device-catalog.html: 
* Filter: clicking on the button «Show» - the form is sent.