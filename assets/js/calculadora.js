// variavel global

const visor = document.getElementById("resultado")

function insert(num) {    
  
   visor.textContent += num
}

function clean() {
   visor.textContent ="";
}

function back() {

let numberVisor = visor.textContent

visor.textContent = numberVisor.substring(0, numberVisor.length - 1)

}

function calcular () {


    let calculo = visor.textContent;
    visor.style.color = 'chocolate';
 
    if (calculo.length > 2) {
           visor.textContent = eval(calculo)
          
    } else {   
        visor.textContent = "Erro!"
        visor.style.color = 'red';
        visor.style.textAlign = 'center'
        
        setTimeout(() => {
        clean();
        visor.style.color = 'black';
                visor.style.textAlign = 'right'
        }, 1000);
    }
}
