function oracion(){
var who= ['The dog ','My grandma ','His turtle ','My bird '];
var randomWho= who[Math.floor(Math.random()*who.length)];
var excuse1= document.write(randomWho);

var action = ['ate ','peed ','crushed ','broke '];
var randomAction= action[Math.floor(Math.random()*action.length)];
var excuse2= document.write(randomAction);

var what = ['my homework ', 'the keys ', 'the car '];
var randomWhat= what[Math.floor(Math.random()*what.length)];
var excuse3= document.write(randomWhat);

var when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
var randomWhen= when[Math.floor(Math.random()*when.length)];
var excuse4= document.write(randomWhen);
}




