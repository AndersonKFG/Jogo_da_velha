const botao1 = document.getElementById("1")
const botao2 = document.getElementById("2")
const botao3 = document.getElementById("3")
const botao4 = document.getElementById("4")
const botao5 = document.getElementById("5")
const botao6 = document.getElementById("6")
const botao7 = document.getElementById("7")
const botao8 = document.getElementById("8")
const botao9 = document.getElementById("9")

function trocar_turno(){

    console.log("Master >>" + turno)

    botao1.addEventListener('click',function(){

        if(turno = "x"){

            this.textContent = "X";
            botao1.setAttribute("disabled", "");
            trocar_turno(turno="c");

        }
        else if(turno = "c"){

            this.textContent = "◯";
            botao1.setAttribute("disabled", "");
            trocar_turno(turno="x");

        }
    })

    
    botao2.addEventListener('click',function(){
        
        if(turno = "x"){

            this.textContent = "X";
            botao2.setAttribute("disabled", "")
            trocar_turno(turno="c");

        }
        else if(turno = "c"){

            this.textContent = "◯"
            botao2.setAttribute("disabled", "")
            trocar_turno(turno="x");

        }
    })
}

trocar_turno(turno="x");