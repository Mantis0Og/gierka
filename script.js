let StartSound = document.getElementById("start-sound");

function Start() {

    StartSound.play();
    document.getElementById("lobby").innerHTML = `<div class="ciemnia" id="ciemnia"></div>`
    setTimeout(() => {
  document.getElementById("app").innerHTML = 
  `
  <div class="game-lobby">

            <div class="buttons">

                <div class="button-shop" id="shop">

                        

                </div>


            </div>

        </div>
        
  `
}, 1500);
    
    
    
}