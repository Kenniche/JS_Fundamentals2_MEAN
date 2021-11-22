// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
//var example;
//console.log(example);
//let example = "I'm the example!";  

//  the code arranged
//var example;
let example = "I'm the example!";  
console.log(example);
//Predict: I'm the example!


//1 Original
console.log(hello);                                   
var hello = 'world';  
//Predict: undefined

//1 Code Rewrite
var hello = 'world'; 
console.log(hello);                                   
//Predict: world

//2
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
//Predict: magnet

//3 Original
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//Predict: super cool

//3 Code Rewrite
var brendan = 'super cool';
function print(){
	let brendan = 'only okay';
	console.log(brendan);
}
print();
console.log(brendan);
//Predict: only okay  /   super cool

//4 Original
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//Predict: chicken  /  half-chicken

//4 Code Rewrite
var food = 'chicken';
console.log(food);
function eat2(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
    console.log(food);
}
eat2();
//Predict: chicken  /   half-chicken / gone

//5 Original
/*mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);*/
// Predict: Sintax error

//5 Rewrite Code
var mean = function() {
    food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
    }
mean();
//Predict: chicken /  fish  

//6 Original
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//Predict: undefined /  rock / r&b / disco

//6 Code Rewrite
var genre = "disco";
console.log(genre);
rewind2();
function rewind2() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//Predict: disco / rock / r&b / disco

//7 Original
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//Predict: san jose / seattle / burbank / san jose

//7 Code Rewrite
var dojo = "san jose";
console.log(dojo);
learn2();
function learn2() {
	let dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//Predict: san jose / seattle / burbank / san jose

//8 Bonus ES6: const
/*console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}*/
//Predict: name: 'Chicago', students: 65, hiring: true / 

//8 Bonus ES6: const / Code Rewrite
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = false;
    }
    if (dojo.hiring == true){
        console.log("It´s Open");
    }
    else{
        console.log("closed for now");
    }
    return dojo;
}



//Predict: name: 'Chicago', students: 65, hiring: true / 

