$("document").ready( function(){
  $("img").on("click", flipImage);
  $("img").on("mouseover mouseleave", highlightImage);

  //setup buttons
  $("#robots").on("click", filterRobots);
  $("#no-figures").on("click", filterNoFigures);
  $("#plus-3").on("click", filterPlus3);
  $("#clear").on("click", filterClear);


function flipImage(evt) {
  //console.log(evt.target.getAttribute("src"));
  var currentImage = evt.target;

  TweenMax.to(currentImage, 1, { scaleY: -1, alpha: 0.2 });
}
function highlightImage(evt) {
  //var currentImage = evt.target;
  //$(currentImage).toggleClass("highlightImage");

}
var allImages = $("#drawing img, #water-color img, #oil img");

function filterRobots(evt) {
  //console.log(evt.target);
  filterClear();
  var selection = $(allImages).not(".robots");
  TweenMax.to(selection, 1, {alpha: 0.25});
}

function filterNoFigures(evt) {
  //console.log(evt.target);
  filterClear();
  var selection = $(allImages).not(".no-figure");
  TweenMax.to(selection, 1, { alpha: 0.25 });
}
function filterPlus3(evt) {
  //console.log(evt.target);
  filterClear();
  var selection = $(allImages).not(".plus-3");
  TweenMax.to(selection, 1, { alpha: 0.25 });
}
function filterClear(evt) {
  //console.log(evt.target);
  //clear all filters
  TweenMax.to(allImages, 1, { alpha: 1 });
}
});
