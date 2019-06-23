$(window).on('load', function() {
  $('#slider').nivoSlider({
    effect:'fade', //Specify sets like: 'fold,fade,sliceDown'
    slices:15,
    animSpeed:600, //Slide transition speed
    pauseTime:8000,
    startSlide:0, //Set starting Slide (0 index)
    directionNav:true, //Next & Prev
    directionNavHide:true, //Only show on hover
    controlNav:true, //1,2,3...
    controlNavThumbs:false, //Use thumbnails for Control Nav
    controlNavThumbsFromRel:false, //Use image rel for thumbs
    controlNavThumbsSearch: '.jpg', //Replace this with...
    controlNavThumbsReplace: '_thumb.jpg', //...this in thumb Image src
    keyboardNav:true, //Use left & right arrows
    pauseOnHover:false, //Stop animation while hovering
    manualAdvance:false, //Force manual transitions
    captionOpacity:0.8, //Universal caption opacity
    beforeChange: function(){},
    afterChange: function(){},
    slideshowEnd: function(){}, //Triggers after all slides have been shown
    lastSlide: function(){}, //Triggers when last slide is shown
    afterLoad: function(){} //Triggers when slider has loaded
});
});


var aamHeader = document.querySelector(".aam h3");
var aamPara = document.querySelector(".aam p");
var cityhallHeader = document.querySelector(".cityhall h3");
var cityhallPara = document.querySelector(".cityhall p");
var ccplazaHeader = document.querySelector(".ccplaza h3");
var ccplazaPara = document.querySelector(".ccplaza p");
var unplazaHeader = document.querySelector (".unplaza h3");
var unplazaPara = document.querySelector (".unplaza p");





var figImg = document.querySelector("figure img");
var figCaption = document.querySelector("figcaption");

function showAam(){
    aamPara.className = "show";
    cityhallPara.classname ="cityhallP";
    ccplazaPara.classname="ccplazaP";
    unplazaPara.classname="unplazaP";
     figImg.src = "images/photos/gbtb.jpg";
     figImg.alt = "Gardens By The Bay";
     figCaption.textContent ="Supertrees, Gardens By The Bay";       
}
function showCityhall(){
    aamPara.className = "aamP";
    cityhallPara.className ="show";
    ccplazaPara.className="ccplazaP";
    unplazaPara.className="unplazaP";
     figImg.src = "images/photos/jewel2.jpg";
     figImg.alt = "Jewel";
     figCaption.textContent ="Jewel, Changi Airport";       
}

function showCcPlaza(){
    aamPara.className = "aamP";
    cityhallPara.className ="cityhallP";
    ccplazaPara.className="show";
    unplazaPara.className="unplazaP";
     figImg.src = "images/photos/m.jpg";
     figImg.alt = "Merlion";
     figCaption.textContent ="Merlion Park, Marina Bay";       
}
function showUnPlaza(){
    aamPara.className = "aamP";
    cityhallPara.className ="cityhallP";
    ccplazaPara.className="ccplazaP";
    unplazaPara.className="show";
     figImg.src = "images/photos/mbs.jpg";
     figImg.alt = "National Gallery";
     figCaption.textContent ="Marina Bay Sands, Marina Bay";       
}
aamHeader.addEventListener("click",showAam);
cityhallHeader.addEventListener("click",showCityhall);
ccplazaHeader.addEventListener("click",showCcPlaza);
unplazaHeader.addEventListener("click",showUnPlaza);


var navButton = document.querySelector(".navigation-menu-button img");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   }, false);
}