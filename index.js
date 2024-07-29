const display = document.getElementById("display");

const botao = document.getElementById("botaodecalcular");

function calcular(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function limparDisplay(){
    display.value = "";
}


