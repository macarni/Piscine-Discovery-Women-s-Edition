
window.onload = function() {
    setInterval(function(){
        alert('Please, use me...');
    }, 30000);

}

function calcularResultado() {
    
    const sumando1 = document.getElementById('sumando1').value; 
    const sumando2 = document.getElementById('sumando2').value;
    const operador = document.getElementById('operador').value;
    let resultado; 

    if (sumando1 >= 0 && sumando2 >= 0) {
        
        switch(operador) {
        case 'suma':
            sumando1
            resultado = parseInt(sumando1) + parseInt(sumando2);
            break;
        case 'resta':
            resultado = sumando1 - sumando2;
            break;
        case 'multiplicacion':
            resultado = sumando1 * sumando2;
            break;
        case 'division':
            if (sumando2 == 0) {
                resultado = "It's over 9000!";
            }
            else 
                resultado = sumando1 / sumando2;
            break;		
        default:
        if (sumando2 == 0) {
                resultado = "It's over 9000!";
            }
            else 
                resultado = sumando1 % sumando2;
            break;			
    }	
    
        alert(resultado);
        console.log(resultado)

    } 
    
    else {

        alert("Error :(");
        
    }

} 
