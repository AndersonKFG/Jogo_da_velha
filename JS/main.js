const botao1 = document.getElementById("1");
const botao2 = document.getElementById("2");
const botao3 = document.getElementById("3");
const botao4 = document.getElementById("4");
const botao5 = document.getElementById("5");
const botao6 = document.getElementById("6");
const botao7 = document.getElementById("7");
const botao8 = document.getElementById("8");
const botao9 = document.getElementById("9");
var turno_dit = document.getElementById("turno_dit");

var turno = "c"

function _turno(){

    if (turno == "c"){
        turno = "x";
        return turno;

    }else if(turno == "x"){
        turno = "c";
        return turno
    }


};

function trocar_turno(){

    if(turno == "x"){
        turno_dit.textContent = "Vez do jogador com o turno ◯"
    }else if(turno == "c"){
        turno_dit.textContent = "Vez do jogador com o turno X"
    }

}


botao1.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao1.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao1.setAttribute("disabled", "")
    }
    
})

botao2.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao2.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao2.setAttribute("disabled", "")
    }
    
})

botao3.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao3.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao3.setAttribute("disabled", "")
    }
    
})

botao4.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao4.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao4.setAttribute("disabled", "")
    }
    
})

botao5.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao5.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao5.setAttribute("disabled", "")
    }
    
})

botao6.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao6.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao6.setAttribute("disabled", "")
    }
    
})

botao7.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao7.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao7.setAttribute("disabled", "")
    }
    
})

botao8.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao8.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao8.setAttribute("disabled", "")
    }
    
})

botao9.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao9.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao9.setAttribute("disabled", "")
    }
    
})