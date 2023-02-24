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
var valor1 = 0;
var valor2 = 0;
var valor3 = 0;
var valor4 = 0;
var valor5 = 0;
var valor6 = 0;
var valor7 = 0;
var valor8 = 0;
var valor9 = 0;

var turno = "c"

function definir_ganhador(){
    if (ganhador == 1){
        turno_dit.textContent = "O vencedor é X"
        turno_dit.style.background = 'linear-gradient(to left, orange, red';
        botao1.setAttribute("disabled", "")
        botao2.setAttribute("disabled", "")
        botao3.setAttribute("disabled", "")
        botao4.setAttribute("disabled", "")
        botao5.setAttribute("disabled", "")
        botao6.setAttribute("disabled", "")
        botao7.setAttribute("disabled", "")
        botao8.setAttribute("disabled", "")
        botao9.setAttribute("disabled", "")
    }else if(ganhador == 2){
        turno_dit.textContent = "O vencedor é ◯"
        turno_dit.style.background = 'linear-gradient(to left, orange, red)';
        botao1.setAttribute("disabled", "")
        botao2.setAttribute("disabled", "")
        botao3.setAttribute("disabled", "")
        botao4.setAttribute("disabled", "")
        botao5.setAttribute("disabled", "")
        botao6.setAttribute("disabled", "")
        botao7.setAttribute("disabled", "")
        botao8.setAttribute("disabled", "")
        botao9.setAttribute("disabled", "")
    }
}

function analisar_ganhador(){

    //Compara se o jogador fez uma linha de marcações utilizando 1 para X e 2 para ◯

    //Horizontais
    if (valor1 == 1 && valor2 == 1 && valor3 == 1||valor4 == 1 && valor5 == 1 && valor6 == 1||valor7 == 1 && valor8 == 1 && valor9 == 1){
        definir_ganhador(ganhador = 1)
    }
    if (valor1 == 2 && valor2 == 2 && valor3 == 2||valor4 == 2 && valor5 == 2 && valor6 == 2||valor7 == 2 && valor8 == 2 && valor9 == 2){
        definir_ganhador(ganhador = 2)
    }

    //Verticais
    if (valor1 == 1 && valor4 == 1 && valor7 ==1||valor2 == 1 && valor5 == 1 && valor8 ==1||valor3 == 1 && valor6 == 1 && valor9 ==1){
        definir_ganhador(ganhador = 1)
    }
    if (valor1 == 2 && valor4 == 2 && valor7 ==2||valor2 == 2 && valor5 == 2 && valor8 ==2||valor3 == 2 && valor6 == 2 && valor9 ==2){
        definir_ganhador(ganhador = 2)
    }

    //Diagonais
    if (valor1 == 1 && valor5 == 1 && valor9 == 1||valor7 == 1 && valor5 == 1 && valor3 == 1){
        definir_ganhador(ganhador = 1)
    }
    if (valor1 == 2 && valor5 == 2 && valor9 == 2||valor7 == 2 && valor5 == 2 && valor3 == 2){
        definir_ganhador(ganhador = 2)
    }

}

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
        valor1 = 1
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao1.setAttribute("disabled", "")
        valor1 = 2
    }
    analisar_ganhador()

})

botao2.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao2.setAttribute("disabled", "")
        valor2 = 1
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao2.setAttribute("disabled", "")
        valor2 = 2
    }
    analisar_ganhador()

})

botao3.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao3.setAttribute("disabled", "")
        valor3 = 1
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao3.setAttribute("disabled", "")
        valor3 = 2
    }
    analisar_ganhador()

})

botao4.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao4.setAttribute("disabled", "")
        valor4 = 1
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao4.setAttribute("disabled", "")
        valor4 = 2
    }
    analisar_ganhador()

})

botao5.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao5.setAttribute("disabled", "")
        valor5 = 1
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao5.setAttribute("disabled", "")
        valor5 = 2
    }
    analisar_ganhador()
})

botao6.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao6.setAttribute("disabled", "")
        valor6 = 1
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao6.setAttribute("disabled", "")
        valor6 = 2
    }
    analisar_ganhador()
})

botao7.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao7.setAttribute("disabled", "")
        valor7 = 1
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao7.setAttribute("disabled", "")
        valor7 = 2
    }
    analisar_ganhador()
})

botao8.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao8.setAttribute("disabled", "")
        valor8 = 1
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao8.setAttribute("disabled", "")
        valor8 = 2
    }
    analisar_ganhador()
})

botao9.addEventListener('click', function(){
    let turno_ = _turno();
    trocar_turno();

    if (turno_ == "x"){
        this.textContent = "X"
        botao9.setAttribute("disabled", "")
        valor9 = 1
    }else if(turno_ == "c"){
        this.textContent = "◯"
        botao9.setAttribute("disabled", "")
        valor9 = 2
    }
    analisar_ganhador()
})