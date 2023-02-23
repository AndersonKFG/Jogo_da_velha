const botao1 = document.getElementById("1");
const botao2 = document.getElementById("2");
const botao3 = document.getElementById("3");
const botao4 = document.getElementById("4");
const botao5 = document.getElementById("5");
const botao6 = document.getElementById("6");
const botao7 = document.getElementById("7");
const botao8 = document.getElementById("8");
const botao9 = document.getElementById("9");
const turno_dit = document.getElementById("turno_dit");

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

botao1.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao1.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "C"
        botao1.setAttribute("disabled", "")
    }
    
})

botao2.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao2.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "C"
        botao2.setAttribute("disabled", "")
    }
    
})

botao3.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao3.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "C"
        botao3.setAttribute("disabled", "")
    }
    
})

botao4.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao4.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "C"
        botao4.setAttribute("disabled", "")
    }
    
})

botao5.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao5.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "C"
        botao5.setAttribute("disabled", "")
    }
    
})

botao6.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao6.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "C"
        botao6.setAttribute("disabled", "")
    }
    
})

botao7.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao7.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "C"
        botao7.setAttribute("disabled", "")
    }
    
})

botao8.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao8.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "C"
        botao8.setAttribute("disabled", "")
    }
    
})

botao9.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao9.setAttribute("disabled", "")
    }else if(turno_ == "c"){
        this.textContent = "C"
        botao9.setAttribute("disabled", "")
    }
    
})