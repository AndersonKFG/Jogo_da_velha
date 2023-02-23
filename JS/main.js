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
// botao2.setAttribute("disabled", "")

var turno = "c"
console.log("Master TURNO -> " + turno)

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
        console.log("X")
    }else if(turno_ == "c"){
        console.log("C")
    }
    
})

botao2.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        console.log("X")
    }else if(turno_ == "c"){
        console.log("C")
    }
    
})

botao3.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        console.log("X")
    }else if(turno_ == "c"){
        console.log("C")
    }
    
})

botao4.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        console.log("X")
    }else if(turno_ == "c"){
        console.log("C")
    }
    
})

botao5.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        console.log("X")
    }else if(turno_ == "c"){
        console.log("C")
    }
    
})

botao6.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        console.log("X")
    }else if(turno_ == "c"){
        console.log("C")
    }
    
})

botao7.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        console.log("X")
    }else if(turno_ == "c"){
        console.log("C")
    }
    
})

botao8.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        console.log("X")
    }else if(turno_ == "c"){
        console.log("C")
    }
    
})

botao9.addEventListener('click', function(){
    let turno_ = _turno();

    if (turno_ == "x"){
        console.log("X")
    }else if(turno_ == "c"){
        console.log("C")
    }
    
})