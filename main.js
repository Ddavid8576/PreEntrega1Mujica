const AR = 1035;
const CLP = 952;
const VES = 38;

function convertir() {
    alert ("Bienvenido a nuestra casa de cambio Coder Change");
    let nombre = prompt("estimado cliente, por favor ingrese su nombre");
    alert("bienvenido: " + nombre); 
    alert("En nuestra casa de cambio podra convertir sus dolares a moneda local, nuestros tipos de cambio: \n AR 1035 \n CLP 952 \n VES 38");
    let valor = parseInt(prompt("ingrese la cantidad en dolares que desea convertir a moneda local"));
    let divisa = prompt(`Elige la divisa que deseas tener, las opciones serian AR CLP VES`).toUpperCase();

    switch(divisa){
        
        case "AR":
            let pesosAr = valor * AR
                alert(`Tu cambio seria ${pesosAr} $, gracias por usar nuestro servicio`)
            break
        case "CLP":
            let pesosClp = valor * CLP
                alert(`Tu cambio seria ${pesosClp} $, gracias por usar nuestro servicio`)
            break   
        case "VES":
            let bolivares = valor * VES
                alert(`Tu cambio seria ${bolivares} VES, gracias por usar nuestro servicio`)
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