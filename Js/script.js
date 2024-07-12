// Variables del simulador
let montoPrestamo
let tasaInteresAnual
let plazoMeses

// Constantes
const PORCENTAJE_ANUAL_A_MENSUAL = 1 / 12
const CUOTAS_POR_ANIO = 12

// Arrays
let historialPagos = []


// Función para solicitar los datos del préstamo usando prompts
function solicitarDatosPrestamo() {
    montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"))
    tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (%):"))
    plazoMeses = parseInt(prompt("Ingrese el plazo del préstamo en meses:"))
}

// Función para calcular la cuota mensual del préstamo
function calcularCuotaMensual() {
    let tasaInteresMensual = tasaInteresAnual * PORCENTAJE_ANUAL_A_MENSUAL
    let cuotaMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazoMeses))
    return cuotaMensual
}

// Función para simular el pago mensual del préstamo
function simularPagoMensual(mes) {
    let cuotaMensual = calcularCuotaMensual()
    let interesMensual = montoPrestamo * tasaInteresAnual * PORCENTAJE_ANUAL_A_MENSUAL
    let amortizacionMensual = cuotaMensual - interesMensual
    montoPrestamo -= amortizacionMensual
    historialPagos.push({ mes: mes, cuota: cuotaMensual, interes: interesMensual, amortizacion: amortizacionMensual, saldoPendiente: montoPrestamo })
}

// Función para mostrar el resumen del préstamo
function mostrarResumenPrestamo() {
    console.log("Resumen del préstamo:")
    console.log(`Monto del préstamo: $${montoPrestamo.toFixed(2)}`)
    console.log(`Tasa de interés anual: ${tasaInteresAnual}%`)
    console.log(`Plazo del préstamo: ${plazoMeses} meses`)

//     console.log("\nHistorial de pagos:");
//     console.log("Mes\tCuota\tInterés\tAmortización\tSaldo Pendiente")
    historialPagos.forEach(pago => {
        console.log(`${pago.mes}\t$${pago.cuota.toFixed(2)}\t$${pago.interes.toFixed(2)}\t$${pago.amortizacion.toFixed(2)}\t\t$${pago.saldoPendiente.toFixed(2)}`)
    });
}

// Función principal para simular el préstamo
function simularPrestamo() {
    solicitarDatosPrestamo()

    let confirmacion = confirm("¿Desea simular el préstamo con los datos ingresados?")
    if (confirmacion) {
        for (let mes = 1; mes <= plazoMeses; mes++) {
            simularPagoMensual(mes)
        }
        mostrarResumenPrestamo()
    } else {
        alert("Simulación de préstamo cancelada.")
    }
}

 