let montoPrestamo
let tasaInteresAnual
let plazoMeses

const PORCENTAJE_ANUAL_A_MENSUAL = 1 / 12

// Función para solicitar los datos 

function solicitarDatosPrestamo() {
    montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"))
    tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (%):"))
    plazoMeses = parseInt(prompt("Ingrese el plazo del préstamo en meses:"))
}

// Función para calcular la cuota mensual del préstamo

function calcularCuotaMensual() {
    let tasaInteresMensual = tasaInteresAnual * PORCENTAJE_ANUAL_A_MENSUAL
    let cuotaMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazoMeses))
    return { cuotaMensual, tasaInteresMensual }
}

// Muestra el resumen del préstamo

function mostrarResumenPrestamo(cuotaMensual, tasaInteresMensual) {
    console.log("Resumen del préstamo:")
    console.log(`Monto del préstamo: $${montoPrestamo.toFixed(2)}`)
    console.log(`Tasa de interés anual: ${tasaInteresAnual}%`)
    console.log(`Plazo del préstamo: ${plazoMeses} meses`)
    console.log(`Cuota mensual: $${cuotaMensual.toFixed(2)}`)
    console.log(`Interés mensual: ${(tasaInteresMensual * 100).toFixed(5)}%`)
}

// Simular el préstamo
function simularPrestamo() {
    solicitarDatosPrestamo()

    let confirmacion = confirm("¿Desea simular el préstamo con los datos ingresados?")
    if (confirmacion) {
        let { cuotaMensual, tasaInteresMensual } = calcularCuotaMensual()
        mostrarResumenPrestamo(cuotaMensual, tasaInteresMensual)
    } else {
        alert("Simulación de préstamo cancelada.")
    }
}


 