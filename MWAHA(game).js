class Gaming{
constructor(){
}
getState(){
var WeirdName = database.ref('gamerstat')
WeirdName.on('value',function(data){
gamerstat = data.val()
})
}
updat(state){
database.ref('/').update({
gamerstat:state
})
}
distarting(){
if (gamerstat===0){
form.display()
ployer = new Ployer()
form = new From()
ployer.getCount()
}
}
}