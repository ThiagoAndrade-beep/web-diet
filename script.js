const calcContainer = document.querySelector("#calc-container")
const resultContainer = document.querySelector("#result-container")
const btnInicio = document.querySelector(".btn-inicio") 
const calcBtn = document.querySelector(".calc-btn")
const btnVoltar = document.querySelector("#btn-voltar")
const imc = document.querySelector(".imc")
const info = document.querySelector(".info")
const clearBtn = document.querySelector(".clear-btn")
const btnBuscar = document.querySelector("#btn-buscar")


function calcImc() {
    const heightInput = document.querySelector("#height-input").value.replace(",", ".")
    const weightInput = document.querySelector("#weight-input").value.replace(",", ".");

     if(!heightInput || !weightInput || isNaN(heightInput) || isNaN(weightInput)) {
        alert("Insira os valores necessários")
        return
     }

     const imcCalc = (weightInput / (heightInput * heightInput)).toFixed(1)
     imc.innerHTML = imcCalc    

     if(imcCalc < 18.5) {
        imc.style.color = "#dbce12"
        info.style.color = "#dbce12"
        info.innerHTML = "Magreza"
    }else if(imcCalc < 24.9) {
        imc.style.color = "#12db34"
        info.style.color = "#12db34"
        info.innerHTML = "Normal"
    }else if(imcCalc < 29.9) {
        imc.style.color = "#db6212"
        info.style.color = "#db6212"
        info.innerHTML = "Sobrepeso"
    }else if(imcCalc < 39.9) {
        imc.style.color = "#db1912"
        info.style.color = "#db1912"
        info.innerHTML = "Obesidade"
    }else if(imcCalc > 40) {
        imc.style.color = "#db1912"
        info.style.color = "#db1912"
        info.innerHTML = "Obesidade grave"
    }

}


btnInicio.addEventListener("click", () => {
    calcContainer.classList.remove("hide")
    resultContainer.classList.add("hide")
})

calcBtn.addEventListener("click", (e) => {
    e.preventDefault()
    calcContainer.classList.add("hide")
    resultContainer.classList.remove("hide")
    calcImc()
})

btnVoltar.addEventListener("click", (e) => {
    e.preventDefault()
    calcContainer.classList.remove("hide")
    resultContainer.classList.add("hide")

    document.querySelector("#height-input").value = "";
    document.querySelector("#weight-input").value = "";
    imc.innerHTML = "";
    info.innerHTML = "";
})

clearBtn.addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#height-input").value = "";
    document.querySelector("#weight-input").value = "";
})

btnBuscar.addEventListener("click", () => {
    const imcValue = parseFloat(imc.innerHTML);

    if (imcValue < 18.5) {
        window.location.href = "pasta/magreza/magreza.html";
    } else if (imcValue < 24.9) {
        window.location.href = "pasta/normal/normal.html";
    } else if (imcValue < 29.9) {
        window.location.href = "pasta/sobrepeso/sobrepeso.html";
    } else if (imcValue < 39.9) {
        window.location.href = "pasta/obesidade/obesidade.html";
    } else {
        window.location.href = "pasta/obesidade-grave/obesidade-grave.html";
    }
});

