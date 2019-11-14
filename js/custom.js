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
    document.getElementById("diag_text").innerHTML = `<b>Autoimmune Diseases (Sjögren’s Syndrome , Rheumatoid Arthritis, AIDS, Systemic 
      Lupus Erythematosis, And Scleroderma)</b> Autonomic dysfunction could explain the decrease in salivary flow in subjects with this 
      disease and the drugs used to their treatment could increase the problem . One of the diseases most associated with a xerostomia 
      is SS, a condition that involves dry mouth and dry eyes and that may be accompanied by rheumatoid arthritis or a related connective 
      tissue disease. An estimated 1 – 4 million people are affected by the Sjögren’s syndrome and women are affected nine times more 
      frequently than.`
  } 
  if(condition == "4"){
    document.getElementById("diag_text").innerHTML = `<b>Neurological Disorders (Parkinson’s disease, Alzheimer's disease)</b>, Psychogenic Illness Such As Depression 
    Regarding neurological diseases, studies have demonstrated that the salivary flow is lower in Parkinson’s disease patients.
     This phenomenon could contribute to dysphagia, which affects up to 75% of patients with this disease. Patients with depression 
     can have hyposalivation medication-induced. However, xerostomia may be of psychological origin. 
    `
  } 
  if(condition == "5"){
    document.getElementById("diag_text").innerHTML = `<b>Hormonal Disorders (Thyroid Dysfunction And Diabetes Mellitus)</b> 
    Both diabetes mellitus (DM) type 1 and type 2 have been associated with xerostomia. The causes of low salivary flow may be
     due to direct injury in the gland parenchyma, changes in the microcirculation to the salivary glands, glycemic control disorders, and dehydration. 
     Some studies consider that this decrease in salivary flow in diabetic subjects is related to an increased diuresis or polyuria, involving 
     a decrease in extracellular fluid and consequently in saliva production 
    `
    
  } 
  if(condition == "6"){
    document.getElementById("diag_text").innerHTML = `<b>Stroke</b> 
    stroke can cause a perception of dry mouth even if salivary function is 
    adequate, due to the diminished ability to perceive oral sensations. Nerve damage or 
    trauma to the head and neck can affect the nerves that provide sensation to the mouth and 
    result in a feeling of dry mouth`
  } 
}