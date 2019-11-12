(function ($) {
  "use strict";

  $(document).ready(function() {
    $('select').niceSelect();
  });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

$(document).ready(function() {
  $('select').niceSelect();
});

var review = $('.client_review_part');
if (review.length) {
  review.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: false,
    smartSpeed: 2000,
  });
}

//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();


}(jQuery));

function ConditionText(condition){
  if(condition == "1"){
    document.getElementById("diag_text").innerHTML = `<b>Radiotherapy</b> or Patients suffering from 
    radiation-induced dry mouth produce 
    less saliva and their remaining saliva tends to feel thick and ropey. The degree of dryness
     is directly dependent on the extent of the salivary gland damage and varies from patient to 
     patient. Once the salivary gland has been injured, it cannot repair itself, 
     so the dryness will persist.`;
  }
  if(condition == "2"){
    document.getElementById("diag_text").innerHTML = `<b>Hormonal Disorders (Thyroid Dysfunction And 
      Diabetes Mellitus)</b> Both diabetes mellitus (DM) type 1 and type 2 have been associated with 
      xerostomia. The causes of low salivary flow may be due to direct injury in the gland parenchyma, 
      changes in the microcirculation to the salivary glands, glycemic control disorders, and dehydration.
       Some studies consider that this decrease in salivary flow in diabetic subjects is related to an 
       increased diuresis or polyuria, involving a decrease in extracellular fluid and consequently in saliva
        production
    `
  } 
  if(condition == "3"){
    
  } 
  if(condition == "4"){
    
  } 
  if(condition == "5"){
    
  } 
  if(condition == "6"){
    
  } 
}