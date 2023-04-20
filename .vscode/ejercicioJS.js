let who= ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function random_items1(items1){
    var random1="";{
    return who[Math.floor(Math.random()*who.length)];
}
    console.log(random_items1(random1));
}
function random_items2(items2){
    var random2="";{
    return action[Math.floor(Math.random()*action.length)];

}
    console.log(random_items2(random2));
}
function random_items3(items3){
    var random3="";{
    return what[Math.floor(Math.random()*what.length)];
}
    console.log(random_items3(random3));
}
function random_items4(items4){
    var random4="";{
    return when[Math.floor(Math.random()*when.length)];
}
    console.log(random_items3(random3));
}
let onLoad(randomParagraph){
    var randomParagraph= random_items1+random_items2+random_items3+random_items4;
    console.log(randomParagraph);
}
console.log(onload(randomParagraph));