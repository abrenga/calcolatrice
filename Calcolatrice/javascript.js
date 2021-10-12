/*let primoNumero = document.getElementById("primoN");
let secondoNumero = document.getElementById("secondoNumero");


let segno = document.getElementById("segno");


function calcola(primo, secondo){
if(segno.value == "+"){
    let risultato = addizione(primo, secondo);
    return risultato;
}

if(segno.value == "-"){
   let risultato = sottrazione(primo, secondo);
   return risultato;
}

if(segno.value == "/"){
    let risultato = divisione (primo, secondo)
    return risultato;

}

if(segno.value == "*"){
    let risultato = moltiplicazione (primo, secondo)
    return risultato;

}


}

function addizione(primo, secondo){

    let somma = primo + secondo;
    return somma;

}

function sottrazione (primo, secondo){

    let sottrazione = primo - secondo;
    return sottrazione;

}


function divisione (primo, secondo){

    let divisione = primo / secondo;
    return divisione;

}



function moltiplicazione (primo, secondo){

    let moltiplicazione = primo * secondo;
    return moltiplicazione;

}


/*btn.addEventListener('click', function(){

    mostraRisultato(risultato);

});



function mostraRisultato(risultato){
    alert(risultato);


}

function onClickButton(){
    let risultato= calcola(parseInt(primoNumero.value),parseInt(secondoNumero.value));
    mostraRisultato(risultato)
}*/






let enter = document.getElementById("btn");
let btns = document.querySelectorAll(".btn_segno");
let signs = document.getElementById("showSegno");

let btnNumbers = document.querySelectorAll(".btn-m");

let boxFirstNumber = document.getElementById("showFirstNumber");
let boxSecondNumber= document.getElementById("showSecondNumber");

btnNumbers.forEach(btnNumber => {
    btnNumber.addEventListener("click", function () {
        if (signs.textContent === "") {
            inserisciNelBoxNumeroUno(btnNumber.textContent);
        }else{
            inserisciNelBoxNumeroDue(btnNumber.textContent);
        }


    })
});


function inserisciNelBoxNumeroUno(numero) {
    boxFirstNumber.value = numero;
}

function inserisciNelBoxNumeroDue(numero) {
    boxSecondNumber.value = numero;
}


btns.forEach(btn => {
    btn.addEventListener("click", function () {

        switch (btn.textContent) {
            case "+":
                inserisciNelBox(btn.textContent);

                break;
            case "-":
                inserisciNelBox(btn.textContent);
                break;
            case "*":
                inserisciNelBox(btn.textContent);
                break;
            case "/":
                inserisciNelBox(btn.textContent);
                break;
        }
    });
});






function inserisciNelBox(simbolo) {
    signs.value = simbolo;
    console.log(simbolo)
}


function addizione(primo, secondo) {

    let somma = primo + secondo;
    return somma;
}

function sottrazione(primo, secondo) {
    let sottrazione = primo - secondo;
    return sottrazione;
}


function divisione(primo, secondo) {

    let divisione = primo / secondo;
    return divisione;

}



function moltiplicazione(primo, secondo) {

    let moltiplicazione = primo * secondo;
    return moltiplicazione;

}




































