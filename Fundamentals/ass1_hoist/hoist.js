// #1
// Original code
// console.log(hello);
// var hello = 'world';

// TODO: As seen by interpreter
// var hello;
// console.log(hello);
// var hello ="world";

// TODO: Predicted output

undefined;

//-------------------------------------------------------------//

// #2
// Original code
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// TODO: As seen by interpreter
// var needle = 'heystack';
// function test(){
//     var needle = "magnet";
//     console.log(needle);
// }
// test()

// TODO: Predicted output

// magnet

//---------------------------------------------------------//

// #3
// Original code
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// TODO: As seen by interpreter

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// TODO: Predicted output

// super cool

//---------------------------------------------------------//

// #4
// Original code
// var food = "chicken";
// console.log(food);
// eat();
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";
// }

// TODO: As seen by interpreter

// var food = 'chicken';
// console.log(food);
// function eat(){
//      var food;
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// eat();

// TODO: Predicted output

// chicken
// half-chicken

//---------------------------------------------------------//

// #5
// Original code

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// TODO: As seen by interpreter

// console.log(food);
// var mean = function() {
//      var food;
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// mean();
// console.log(food);

// TODO: Predicted output
// error: undefined food

// TODO: Correct output

//TypeError: mean is not a function

//---------------------------------------------------------//

// #6
// Original code

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//   genre = "rock";
//   console.log(genre);
//   var genre = "r&b";
//   console.log(genre);
// }
// console.log(genre);

// TODO: As seen by interpreter

// var genre;
// console.log(genre);
// var genre = "disco";
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// rewind();
// console.log(genre);

// TODO: Predicted output

// undefined
// rock
// r&b
// disco

// TODO: Correct output

// correct as expected

//---------------------------------------------------------//

//---------------------------------------------------------//

// #7
// Original code

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//   dojo = "seattle";
//   console.log(dojo);
//   var dojo = "burbank";
//   console.log(dojo);
// }
// console.log(dojo);

// TODO: As seen by interpreter

// dojo = "san jose";
// console.log(dojo);
// function learn() {
//      var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// learn();
// console.log(dojo);

// TODO: Predicted output

// undefined dojo
// seattle
// burbank
// undifined dojo

// TODO: Correct output
// san jose
// seattle
// burbank
// san jose

//---------------------------------------------------------//
