const BTN_calculate = document.querySelector("#calculate");
const date = document.querySelector("#date");
const result = document.querySelector("#result");
const resultDays = document.querySelector("#days");

const dt = luxon.DateTime
const now = dt.now()

date.addEventListener("input", () =>{
  let value = date.value.replace(/\D/g,"");

  if(value.length > 2){
    value = value.slice(0,2) + "/" + value.slice(2);
  }
  if(value.length > 5){
    value = value.slice(0,5) + "/" + value.slice(5, 9);
  }

  date.value = value;
})

BTN_calculate.addEventListener("click", () =>{
  let value = date.value;
  if(value.length != 10){
    alert("Type in correct format");
    return;
  }

  let day = value.slice(0,2);
  let month = value.slice(3, 5);
  let year = value.slice(6);
  
  

  let newdate = dt.local(parseInt(year), parseInt(month), parseInt(day))

  let birthdayInThisYear = dt.local(now.toObject().year, parseInt(month), parseInt(day))

  console.log(birthdayInThisYear.toLocaleString());

  let diference = now.diff(newdate, ['years', 'months']).toObject();
  let diferenceBirthDay = birthdayInThisYear.diff(now, ['days']).toObject();
  let differenceDays = Math.floor(diferenceBirthDay.days)+1
  if(diference.years < 0){
    alert("Invalid Date.")
    return;
  }

  result.textContent = diference.years + " years and " + Math.floor(diference.months) + " months old";
  resultDays.textContent =  differenceDays + " days left to your birthday"
})