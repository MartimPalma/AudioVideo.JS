var canal = document.getElementById("canal");
var ligado = 0;
var agora = 0;

document.getElementById("canais").onclick = function () {

   document.getElementById("c1").onclick = function () {
      canal.src= "assets/media/video/c1.mp4";
      canal.load();
      canal.play();
      document.getElementById("c1").style.display = "block";
   }

   document.getElementById("c2").onclick = function () {
      canal.src= "assets/media/video/c2.mp4";
      canal.load()
      canal.play();
      document.getElementById("c2").style.display = "block";
   }

   document.getElementById("c3").onclick = function () {
      canal.src= "assets/media/video/c3.mp4";
      canal.load();
      canal.play();
      document.getElementById("c3").style.display = "block";
   }
}

document.getElementById("pausa").onclick = function () {

   //verificar se o vídeo está em pausa,retorna um valor booleano//
   console.log(canal.paused)

   if (canal.paused === true){
      console.log("O vídeo está a correr");
      canal.play();
   }
   else {
      console.log("o vídeo está em pausa");
      canal.pause();
   }
}

document.getElementById("controlos").onclick = function () {
   document.getElementById("mute").style.display = "none";

   document.getElementById("aumenta").onclick = function () {
      console.log(canal.volume);

      if (canal.volume > 0 + canal.volume < 1) {
         canal.volume = canal.volume + 0.1;
         console.log(canal.volume);
      }
   }
   
   document.getElementById("diminui").onclick = function () {
      console.log(canal.volume);

      if (canal.volume >= 0.1 + canal.volume <= 1) {
         canal.volume = canal.volume - 0.1;
         console.log(canal.volume);
      }

      //não está a funcionar????? na console dá numeros estranhos///
      if (canal.volume <= 0) {
           console.log(canal.volume);
           document.getElementById("mute").style.display = "block";
      }
   }
}


