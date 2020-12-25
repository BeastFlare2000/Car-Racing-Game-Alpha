var gamerstat = 0
var paincounter
var database
var form,ployer,gamboy

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  gamboy = new Gaming()
  gamboy.getState()
  gamboy.distarting()
}
//hi
function draw(){
  background("white");
  
    drawSprites();
  
}
