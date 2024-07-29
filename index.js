const display = document.getElementById("display");
const historico = document.getElementById("historico");

function calcular(){
    try{
        colocar_no_historico(display.value, eval(display.value));
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function colocar_no_historico(expressao, resultado){
    historico.innerHTML = expressao + " = " + resultado + "<br>" + historico.innerHTML;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calcular();
    }
});

