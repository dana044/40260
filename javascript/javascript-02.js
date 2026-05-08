let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")

let prm1 = ""
let prm2 = ""
let operacion = ""

// 1. Asignar eventos a los números
for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        if (boton.className != "operadores") 
            boton.addEventListener("click", pintar)
        else
            boton.addEventListener("click", pintar2)
    }
}

function pintar(e){
    resultado.value += e.target.innerText
}

function pintar2(e){
    let texto = e.target.innerText
    
    if (texto == "+") suma()
    else if (texto == "-") resta()
    else if (texto == "*") multiplicacion()
    else if (texto == "/") division()
    else if (texto == "Ce") ce()
    else if (texto == "=") igual()
}


function suma(){
    prm1 = resultado.value
    operacion = "+"
    resultado.value = ""
}

function resta(){
    prm1 = resultado.value
    operacion = "-"
    resultado.value = ""
}

function multiplicacion(){
    prm1 = resultado.value
    operacion = "*"
    resultado.value = ""
}

function division(){
    prm1 = resultado.value
    operacion = "/"
    resultado.value = ""
}

function ce(){
    resultado.value = ""
    prm1 = ""
    prm2 = ""
    operacion = ""
}


function igual(){
    prm2 = resultado.value
    let n1 = parseInt(prm1)
    let n2 = parseInt(prm2)
    let total = 0

    if (operacion == "+") total = n1 + n2
    if (operacion == "-") total = n1 - n2
    if (operacion == "*") total = n1 * n2
    if (operacion == "/") total = n1 / n2

    resultado.value = total
}