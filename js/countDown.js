export default function CountDown(){
  

/* *************************************************** */
/* Start CountDown */ 
let hourInput = document.getElementById('hour');
let minInput = document.getElementById('min');
let secInput = document.getElementById('sec');
// Set CountDown Date Time
let countDownDate = new Date("Jan 1 2022 12:00:00").getTime();

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

  console.log(Hours);
  hourInput.innerHTML = Hours < 10  ? "0" + Hours : Hours;
  minInput.innerHTML = Min < 10 ? "0" + Hours : Hours;
  secInput.innerHTML = Secs < 10?  "0" + Hours : Hours;

  if( distance < 0 ){

    clearInterval(x);
    document.getElementById('countDown').classList.add('d-none');
    document.getElementById('countDownEnd').classList.remove('d-none');
  }

}, 1000);

/* End CountDown */ 
/* *************************************************** */
}