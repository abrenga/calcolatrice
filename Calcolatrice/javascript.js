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







let btns = document.querySelectorAll(".btn-m");



    btns.forEach(btn => {
        btn.addEventListener("click", function () {

          if(primoBox.textContent === ""){
              inserisciNelBox(btn.textContent);
          } ;
        });

    });


function inserisciNelBox(numero){
    
}






































