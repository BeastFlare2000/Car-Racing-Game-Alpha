class Ployer{
constructer(){
}
getCount(){
var WeirdName1 = database.ref('paincounter')
WeirdName1.on('value',function(data){
paincounter = data.val()
})
} 
updateCount(count){
database.ref('/').update({
paincounter:count
})
}
update(Name2){
var Name1 = "Player"+paincounter
database.ref(Name1).set({
Name:Name2
})
}
}
