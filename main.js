var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var wasChanged = document.querySelector('[data-image-url="http://thepetshopinc.com/wp-content/uploads/2015/07/puppies.jpg"]');

//begin low-level operations
function setDetails(imageURL, titleText) {
// tells browser this is most recent version of JavaScript
  'use strict';
  // statements follow
var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
detailImage.setAttribute('src', imageURL);
var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict'
  return thumbnail.getAttribute('data-image-url')
}

function titleFromThumb(thumbnail) {
  'use strict'
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict'
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

//end low-level operations

function randoReset() {
  wasChanged.addEventListener('click', function(event){
    event.preventDefault();
    wasChanged.setAttribute('data-image-url', 'wasChanged.src');
    console.log('click');
  });
}

function changeRandoImage() {
  var imageArray = getThumbnailsArray();
  var randomNumber = Math.floor(Math.random() * 5);
  var gotChanged = imageArray[randomNumber];
  gotChanged.setAttribute('data-image-url', 'http://thepetshopinc.com/wp-content/uploads/2015/07/puppies.jpg');
}

function addThumbClickHandler(thumb) {
  'use strict'
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  })
}

function getThumbnailsArray() {
  'use strict'
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray
}

//application starting mechanism
function initializeEvents() {
  'use strict'
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

randoReset();
changeRandoImage();
initializeEvents();
