let who= ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let onLoad();

var random1(){
    return who[Math.floor(Math.random()*who.length)];
}
var random2()={
    return action[Math.floor(Math.random()*action.length)];
}
var random3()={
    return what[Math.floor(Math.random()*what.length)];
}
var random4()={
    return when[Math.floor(Math.random()*when.length)];
}