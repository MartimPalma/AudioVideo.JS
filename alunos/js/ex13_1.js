
var audiointro ;

//define um audio//
var ado = new Audio("assets/media/audio/do.mp3")
var are = new Audio("assets/media/audio/re.mp3")
var ami = new Audio("assets/media/audio/mi.mp3")
var afa = new Audio("assets/media/audio/fa.mp3")
var asol = new Audio("assets/media/audio/sol.mp3")
var ala = new Audio("assets/media/audio/la.mp3")
var asi = new Audio("assets/media/audio/si.mp3")

//enquanto o browser está a carregar//
window.onload = function () {
    audiointro = new Audio("assets/media/audio/intro.mp3");

    //quando clica em jsTrigger//
    document.getElementById("jsTrigger").onclick = function () {
        //audio toca//
        audiointro.play();
        document.getElementById("jsTrigger").style.display = "none";

    }
}

//tecla premida//
window.onkeyup = function (event) {

    console.log(event.key) //guarda valor da tecla//

    //ver qual foi a tecla premida//
    //console.log(event.key)//
    /*var tecla = event.key
    console.log(tecla);*/

    //decisão múltipla consoante a tecla premida  , event.key//
    switch (event.key) {
        case "a":
            ado.play();
            break;
        case "s":
            are.play();
            break;
        case "d":
            ami.play();
        break;
        case"f":
            afa.play();
            break;
        case"g":
            asol.play();
        break;
        case "h":
            ala.play();
            break;
        case "j":
            asi.play();
            break;
    }

}