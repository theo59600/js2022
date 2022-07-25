//const mousemove = document.querySelector(".mousemove"); 
//console.log(mousemove);                                  c'etais pour tester dans la console 


let screenLog = document.querySelector('#screen-log');  //Declaration d'une variable screen-Log que nous allons chercher dans html
document.addEventListener('mousemove', logKey);  //On créer un evenement mousemove

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}

