const botao1 = document.getElementById("1")
const botao2 = document.getElementById("2")
const botao3 = document.getElementById("3")
const botao4 = document.getElementById("4")
const botao5 = document.getElementById("5")
const botao6 = document.getElementById("6")
const botao7 = document.getElementById("7")
const botao8 = document.getElementById("8")
const botao9 = document.getElementById("9")
const turno_dit = document.getElementById("turno_dit")

function trocar_turno(){

    console.log("Master >>" + turno)

    if (turno = "x"){
        turno_dit.textContent = "Vez do jogador com X";
    }else if(turno = "c"){
        turno_dit.textContent = "Vez do jogador com ◯";
    }

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

        console.log("AQUI!" + turno)
        
        if(turno = "x"){

            console.log("AAAAAAAAAAAAAAAA")
            this.textContent = "X";
            botao2.setAttribute("disabled", "")
            trocar_turno(turno="c");

        }
        else if(turno = "c"){

            console.log("Aquiiiiiii!")
            this.textContent = "◯"
            botao2.setAttribute("disabled", "")
            trocar_turno(turno="x");

        }
    })
}

trocar_turno(turno="x");