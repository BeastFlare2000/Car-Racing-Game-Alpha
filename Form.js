class From{
constructor(){
}
display(){
var Tighten = createElement('h1')
Tighten.html('carRacingGame')
Tighten.position(130,0)
var Input = createInput('nom')
var Button = createButton('omnomnom')
var Grooting = createElement('h2')
Input.position(130,160)
Button.position(250,250)
Button.mousePressed(function(){
Input.hide()
Button.hide()
var Name = Input.value()
paincounter += 1
ployer.update(Name)
ployer.updateCount(paincounter)
Grooting.html("Hello "+Name)
Grooting.position(150,200)
})
}
}