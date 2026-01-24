const { DateTime } = luxon;

const result = document.querySelector("#result");
const IN_date = document.querySelector("#date");
const BTN_calculate = document.querySelector("#calculate");

const dt = DateTime.now();

BTN_calculate.addEventListener("click", () => {

    //Gets Values From Input
    let input_value = IN_date.value;
    if(input_value == null || input_value == ""){
        alert("You need to enter a date.")
        return

    };

    let year = parseInt(input_value.slice(0, -6));
    let month = parseInt(input_value.slice(-5, -3));

    //Get Values From Actual Date
    let actual_month = parseInt(dt.month);
    let actual_year = parseInt(dt.year);

    //Calculate
    let birth_month = month - actual_month;
    let birth_year = actual_year - year;
    
    console.log(birth_year);
    console.log(birth_month);

    result.textContent = "You are " + birth_year + " years " + birth_month + " months old";

});