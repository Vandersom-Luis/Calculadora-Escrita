const display = document.getElementById("display");

function calcular(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calcular();
    }
});