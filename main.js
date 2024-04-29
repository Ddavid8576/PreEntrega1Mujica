const ARS = 1035;
const CLP = 952;
const VEF = 38;
const COP = 3896;
const PEN = 3.7;


    alert ("Bienvenido a nuestra casa de cambio Coder Change");
    let nombre = prompt("estimado cliente, por favor ingrese su nombre");
    alert("bienvenido: " + nombre); 
    function convertir() {
    alert(`En nuestra casa de cambio podra convertir sus dolares a moneda local, nuestros tipos de cambio: \n ARS ${ARS} \n CLP ${CLP} \n VEF ${VEF} \n COP ${COP} \n PEN ${PEN}`);
    let valor = parseInt(prompt("ingrese la cantidad en dolares que desea convertir a moneda local"));
    let divisa = prompt(`Elige la divisa que deseas tener, las opciones serian ARS CLP COP PEN VEF `).toUpperCase();

    switch(divisa){
        
        case "ARS":
            let pesosAr = valor * ARS
                alert(`Tu cambio seria ${pesosAr} $, Su pago se realizara en efectivo o transferencia`)
            break
        case "CLP":
            let pesosClp = valor * CLP
                alert(`Tu cambio seria ${pesosClp} $, Su pago se realizara en efectivo o transferencia`)
            break   
        case "COP":
            let pesosCop = valor * COP
                alert(`Tu cambio seria ${pesosCop} $, Su pago se realizara en efectivo o transferencia`)
            break  
        case "PEN":
            let solPen = valor * PEN
                alert(`Tu cambio seria ${solPen} $, Su pago se realizara en efectivo o transferencia`)
            break 
        case "VEF":
            let bolivares = valor * VEF
                alert(`Tu cambio seria ${bolivares} VEF, Su pago se realizara en efectivo o transferencia`)
            break
            
        default:
                alert(`no tenemos disponibles cambios para la divisa ${divisa}`)
    }
    let consulta = confirm("Necesitas realizar otro cambio?")

if(consulta == true){
    convertir()

}else{
    alert("Gracias por preferir Coder Change, feliz dia")
}
} 
convertir()