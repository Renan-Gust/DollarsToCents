var quarters = document.querySelector(".quarters")
var dimes = document.querySelector(".dimes")
var nickel = document.querySelector(".nickel")
var pennies = document.querySelector(".pennies")

document.querySelector("button").addEventListener("click", () => {
    var inputValue = document.querySelector("#dollar").value

    quarters.innerHTML = "Quarters: " + Math.floor(inputValue / 0.25) + " Dólares"
    dimes.innerHTML = "Dimes: " + Math.floor(inputValue / 0.10) + " Dólares"
    nickel.innerHTML = "Nickel: " + Math.floor(inputValue / 0.05) + " Dólares"
    pennies.innerHTML = "Pennies: " + Math.floor(inputValue / 0.01) + " Dólares"

    if(inputValue == 0){
        alert("Digite o valor")

        quarters.innerHTML = "Quarters:" 
        dimes.innerHTML = "Dimes:" 
        nickel.innerHTML = "Nickel:" 
        pennies.innerHTML = "Pennies:" 
    }

    if(inputValue.length > 7){
        alert("O máximo é 7 digitos")

        quarters.innerHTML = "Quarters:" 
        dimes.innerHTML = "Dimes:" 
        nickel.innerHTML = "Nickel:" 
        pennies.innerHTML = "Pennies:" 
    }
})


