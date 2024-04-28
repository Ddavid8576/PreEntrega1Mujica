const ARS = 1035;
const CLP = 952;
const VEF = 38;
const COP = 3896;
const PEN = 3.7;

function convertir() {
    alert ("Bienvenido a nuestra casa de cambio Coder Change");
    let nombre = prompt("estimado cliente, por favor ingrese su nombre");
    alert("bienvenido: " + nombre); 
    alert("En nuestra casa de cambio podra convertir sus dolares a moneda local, nuestros tipos de cambio: \n ARS 1035 \n CLP 952 \n VES 38 \n COP 3896 \n PEN 3.7");
    let valor = parseInt(prompt("ingrese la cantidad en dolares que desea convertir a moneda local"));
    let divisa = prompt(`Elige la divisa que deseas tener, las opciones serian ARS CLP COP PEN VEF `).toUpperCase();

    switch(divisa){
        
        case "ARS":
            let pesosAr = valor * ARS
                alert(`Tu cambio seria ${pesosAr} $, gracias por usar nuestro servicio`)
            break
        case "CLP":
            let pesosClp = valor * CLP
                alert(`Tu cambio seria ${pesosClp} $, gracias por usar nuestro servicio`)
            break   
        case "COP":
            let pesosCop = valor * COP
                alert(`Tu cambio seria ${pesosCop} $, gracias por usar nuestro servicio`)
            break  
        case "PEN":
            let solPen = valor * PEN
                alert(`Tu cambio seria ${solPen} $, gracias por usar nuestro servicio`)
            break 
        case "VEF":
            let bolivares = valor * VES
                alert(`Tu cambio seria ${bolivares} VEF, gracias por usar nuestro servicio`)
            break
            
        default:
                alert(`no tenemos disponibles cambios para la divisa ${divisa}`)
    }
    let consulta = confirm("Necesitas realizar otro cambio?")

if(consulta == true){
    convertir()

}
} 
convertir()