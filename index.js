/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn");

convertBtn.addEventListener("click", function() {
    const heroInput = document.querySelector("#hero-input").value
    lengthConverter(heroInput)
    volumeConverter(heroInput)
    massConverter(heroInput)
})

function lengthConverter(input) {
    const lenghtConv = document.querySelector("#length-conv")
    lenghtConv.innerHTML = `
    <p id="first-p">
        ${input} meters = ${(input*3.281).toFixed(3)} feet    
    </p>
    <p>
        ${input} feet = ${(input/3.281).toFixed(3)} metres    
    </p>
    `
}

function volumeConverter(input) {
    const volConv = document.querySelector("#vol-conv")
    volConv.innerHTML = `
    <p id="first-p">
        ${input} litres = ${(input*0.264).toFixed(3)} gallons    
    </p>
    <p>
        ${input} gallons = ${(input/0.264).toFixed(3)} litres    
    </p>
    `
}

function massConverter(input) {
    const massConv = document.querySelector("#mass-conv")
    massConv.innerHTML = `
    <p id="first-p">
        ${input} kilos = ${(input*2.204).toFixed(3)} pounds    
    </p>
    <p>
        ${input} pounds = ${(input/2.204).toFixed(3)} kilos    
    </p>
    ` 
}