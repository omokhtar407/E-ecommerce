"use strict"
/* index page */ 

/*Start Nav Bar */
let MainNavOffset = $('#main_nav').offset().top;

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll >= MainNavOffset ){
      
        $('#main_nav').addClass('nav-scroll');
    }
    else{
      $('#main_nav').removeClass('nav-scroll');
    }
});

// for BtnUp
let CharOffset = $('#characteristics').offset()?.top;
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll > CharOffset - 650){
        $('#btnUp').fadeIn(500);
    }
    else{
        $('#btnUp').fadeOut(500);
    }
})

$('#btnUp').click(function(){
    $('body,html').animate({scrollTop:0},1000)
})
/* End */

/*Go to Sections with Smooth scroll */
$("a[href^= '#']").click(function(e){
  let aHref = $(e.target).attr('href');
  let secOffset = $(aHref).offset().top;
  $('body , html').animate({scrollTop:secOffset} , 1000);
})
/* End */

/* slide between sections */
// deals_featured , New_Arrival , best_seller 
$('.featurd_list li').click(function(){

  $(this).addClass('active').siblings().removeClass('active');

  $('#deals_featured .items-sections > div , #New_Arrival .items-sections > div ,#best_seller .items-sections > div').hide();
  
  $($(this).data('content')).fadeIn(500).css('display','flex');
});
/* End slide between sections */

// Main custom_header
$('.selected-category').click(function(){
  $('.custom_header').fadeIn(300);
});
$('.custom_header li').click(function(){
  $('.selected-category').text($(this).text());
  $('.custom_header').fadeOut(300);
});


// All plugins
$(document).ready(function(){
  // loading
  $('#spinner').fadeOut(1500 ,() => {
    $('#spinner').parent().fadeOut(2500 , ( ) => {
        $('.loading').remove();
        $('body').css( "overflow-y","auto" );
    }) 
  });
  // owl-carousel
  $('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    responsiveClass:true,
    autoplay:true,
    autoplaySpeed:1000,
    nav:false,
    dots:true,
    dotsSpeed:1000,
    responsive:{
        0:{
            items:1,
            dots:false,
        },
        576:{
          items:1,
        }
    }
    });
  // Deals_of_the_Week_Owl
  $('.Deals_of_the_Week_Owl').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:1000,
    dots:false,
    nav:true,
    navSpeed:700,
    responsive:{
      0:{
        items:1
    }
    }
    });
  // brand-owl
  $('.brand-owl').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  autoplaySpeed:1000,
  dots:false,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
    });
  // recently_viewed_owl
  $('.recently_viewed_owl').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
    });
  // Latest_Reviews_owl
  $('.Latest_Reviews_owl ').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplaySpeed:2000,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });
  // slick Trends
  $('.trends').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

});

// product Images
$('.image_list li > img').click(function(){
  $('.main_img').hide().attr('src',$(this).attr('src')).fadeIn(500);
});

/* Start Subscribe Validation */
// User Subscribe Email
let userSubEmailInput = document.getElementById('userSubEmail'); 
let BtnSubEmail = document.getElementById('btnSubEmail');


function validateUserSubEmail(){
  let regex = /^([A-z][.A-z]{2,15}[0-9]{0,4}@(gmail|yahoo|outlook).com)$/;
  if(regex.test(userSubEmailInput.value) == true){
      BtnSubEmail.disabled =!1;
      return true;
  }
  else{
      BtnSubEmail.disabled =!0;
      return false;
  }
}
userSubEmailInput.addEventListener('keyup',function () {
  validateUserSubEmail();
});

let formSub = document.getElementById('subscrib_form');

formSub.addEventListener('submit',function(e){
      e.preventDefault();
  
      if(validateUserSubEmail() == true){
          BtnSubEmail.disabled =!1;
      }
      else{
          BtnSubEmail.disabled=!0;
      }
});
/* End Subscribe Validation */

  /* *************************************************** */
  /* Start CountDown */ 
  let hourInput =Array.from(document.querySelectorAll('#hour'));
  let minInput =Array.from(document.querySelectorAll('#min'));
  let secInput = Array.from(document.querySelectorAll('#sec'));

  let countDown =Array.from(document.querySelectorAll('#countDown'));
  let countDownEnd = Array.from(document.querySelectorAll('#countDownEnd'));
  // Set CountDown Date Time
  let countDownDate = new Date("Feb 22 2022 12:00:00").getTime();
  
  let x = setInterval(function(){
    // Get Now Time
    let curDate = new Date().getTime();
  
    // the distance between now and the countDown Date
    let distance  =  countDownDate - curDate;
  
    // Calculate Days, Hours, Mins and Secs
    let Days = Math.floor(distance / ( 1000 * 60 * 60 * 24));
  
    let Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
    let Min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
    let Secs = Math.floor((distance % (1000 * 60)) / (1000));
  
    for(let x = 0 ; x < 3 ; x++){
      hourInput[x].innerHTML = Hours < 10  ? "0" + Hours : Hours;
      minInput[x].innerHTML = Min < 10 ? "0" + Min : Min;
      secInput[x].innerHTML = Secs < 10?  "0" + Secs : Secs;
    }
    if( distance < 0 ){
  
      clearInterval(x);
      for(let x = 0 ; x < 3 ; x++){
        countDown[x].classList.add('d-none');
        countDownEnd[x].classList.remove('d-none');
      }
    }
  
  }, 1000);
  
  /* End CountDown */ 
  /* *************************************************** */

  /* Start Contact Validation */
let userNameInput = document.getElementById('userName'); 
let userPhoneInput = document.getElementById('userPhone'); 
let userEmailInput = document.getElementById('userEmail'); 
let messageInput = document.getElementById('message');
/* hold Spans */
let userNameReqError = document.getElementById('userNameReq');  
let userEmailReqError = document.getElementById('userEmailReq');  
let userPhoneReqError = document.getElementById('userPhoneReq');  
let messageReqError = document.getElementById('messageReq'); 

let Btn = document.getElementById('btnSubmit');

// User Name
function validateUserName(){
  let regex = /^([A-z ]{3,15})$/;
  
  if(regex.test(userNameInput.value) == true){
      Btn.disabled =!1;
      userNameInput.classList.add('is-valid');
      userNameInput.classList.remove('is-invalid');
      userNameReqError.classList.add('d-none');
      return true;
  }
  else{
      Btn.disabled =!0;
      userNameInput.classList.add('is-invalid');
      userNameInput.classList.remove('is-valid');
      userNameReqError.classList.remove('d-none');
      
      return false;
  }
}
userNameInput.addEventListener('keyup',function () {
  validateUserName();
});

// User Email
function validateUserEmail(){
  let regex = /^([A-z][.A-z]{2,15}[0-9]{0,4}@(gmail|yahoo|outlook).com)$/;
  if(regex.test(userEmailInput.value) == true){
      Btn.disabled =!1;
      userEmailInput.classList.add('is-valid');
      userEmailInput.classList.remove('is-invalid');
      userEmailReqError.classList.add('d-none');
      return true;
  }
  else{
      Btn.disabled =!0;
      userEmailInput.classList.add('is-invalid');
      userEmailInput.classList.remove('is-valid');
      userEmailReqError.classList.remove('d-none');
      
      return false;
  }
}
userEmailInput.addEventListener('keyup',function () {
  validateUserEmail();
});

// User Phone
function validateUserPhone(){
  let regex = /^(010|011|012)[0-9]{8}$/;
  if(regex.test(userPhoneInput.value) == true){
      Btn.disabled =!1;
      userPhoneInput.classList.add('is-valid');
      userPhoneInput.classList.remove('is-invalid');
      userPhoneReqError.classList.add('d-none');
      return true;
  }
  else{
      Btn.disabled =!0;
      userPhoneInput.classList.add('is-invalid');
      userPhoneInput.classList.remove('is-valid');
      userPhoneReqError.classList.remove('d-none');
      
      return false;
  }
}
userPhoneInput.addEventListener('keyup',function () {
  validateUserPhone();
});

// User Message
function validateUserMessage(){
  let regex = /^([A-z ]{3,200})$/;
  
  if(regex.test(messageInput.value) == true){
      Btn.disabled =!1;
      messageInput.classList.add('is-valid');
      messageInput.classList.remove('is-invalid');
      messageReqError.classList.add('d-none');
      return true;
  }
  else{
      Btn.disabled =!0;
      messageInput.classList.add('is-invalid');
      messageInput.classList.remove('is-valid');
      messageReqError.classList.remove('d-none');
      
      return false;
  }
}
messageInput.addEventListener('keyup',function () {
  validateUserMessage();
});
// Submit
let Form = document.getElementById('form');

document.getElementById('ContactUs').addEventListener('click',function () {
  Form.addEventListener('submit',function(e){
      e.preventDefault();
  
      if(validateUserName() == true && validateUserEmail() == true && validateUserPhone() == true && validateUserMessage() == true){
          Btn.disabled =!1;
          document.getElementById('success').classList.remove('d-none');
      }
      else{
          Btn.disabled=!0;
      }
  })
});
/* End Contact Validation */
