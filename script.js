// class constructor
class Converter {
    constructor(showResult, inputField) {
        this.showResult = showResult;
        this.inputField = inputField;
        this.clear()
    }

    convertInput(inputValue, convertFrom, convertTo) {
        this.inputValue = inputValue
        this.convertFrom = convertFrom
        this.convertTo = convertTo
    }

    diplayAnswer(result) {
        this.result = result
        if (this.inputValue === "0" || this.inputValue === "") return
        this.showResult.innerHTML = result;
    }

    clear() {
        this.showResult.innerHTML = ""
        this.inputField.value = ""
    }
}

const input = document.querySelector(".input");
const resultDisplay = document.querySelector(".resultDisplay");
const unconvUnits = document.querySelector("#unconvUnits");
const convUnits = document.querySelector("#convUnits");
const clearBtn = document.querySelector("#all-clear");
const calcBtn = document.querySelector("#calc");
const reverse = document.querySelector(".reverse")

// instance of the Calculator Class constructor
const converter = new Converter(resultDisplay, input);

function calculate() {
    converter.convertInput(input.value, unconvUnits.value, convUnits.value);
    if (input.value <= 0) return
    if (unconvUnits.value === convUnits.value) {
        result = input.value
    }
    else if (unconvUnits.value === "km" && convUnits.value === "m") {

        result = input.value * 1000
    }
    else if (unconvUnits.value === "km" && convUnits.value === "cm") {
        result = input.value * 100000

    }
    else if (unconvUnits.value === "km" && convUnits.value === "ml") {
        result = input.value * 0.621371192
    }

    else if (unconvUnits.value === "m" && convUnits.value === "km") {
        result = input.value / 10000
    }
    else if (unconvUnits.value === "m" && convUnits.value === "cm") {
        result = input.value * 100
    }
    else if (unconvUnits.value === "m" && convUnits.value === "ml") {
        result = input.value * 0.000621371192
    }

    else if (unconvUnits.value === "cm" && convUnits.value === "km") {
        result = input.value / 100000
    }
    else if (unconvUnits.value === "cm" && convUnits.value === "m") {
        result = input.value / 100
    }
    else if (unconvUnits.value === "cm" && convUnits.value === "ml") {
        result = input.value / 160934.4
    }

    else if (unconvUnits.value === "ml" && convUnits.value === "km") {
        result = input.value * 1.609344
    }
    else if (unconvUnits.value === "ml" && convUnits.value === "cm") {
        result = input.value * 160934.4
    }
    else if (unconvUnits.value === "ml" && convUnits.value === "m") {
        result = input.value * 1609.344
    }
    converter.diplayAnswer(result, input);
    resultDisplay.innerHTML = `${input.value} ${unconvUnits.value} = <br> ${result} ${convUnits.value}`
}

// performs conversion
calcBtn.addEventListener("click", calculate);

// event listener that handles toggling the units options
reverse.addEventListener("click", () => {
    const unconvUnitsVar = unconvUnits.value;
    unconvUnits.value = convUnits.value;
    convUnits.value = unconvUnitsVar;
})

// clears inputField and output display
clearBtn.addEventListener("click", () => {
    converter.clear()
});
