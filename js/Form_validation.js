export default function validation(){
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
}