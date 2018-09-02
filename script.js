// Create a variable and set its value to the answer of a math equation. It should be a number Value
var a=3 + 5;

// Create a variable and set its value to 5 strings being concatenated together using the ‘+’ operator. Each string should be at least 10 characters long. Try and make a real paragraph that a human will be able to read and understand.
var b= ("My name is nijhum." + "I live in miami." + "I came from bangladesh." + "I work in my own store." + "I love my work."); 
//console.log(b)
// Create a variable and use the ES6 string interpolation (back ticks) to set the value of a variable to a string that includes 5 variables whose values are numbers. Use ${} to use these number variables in the string variable.
var c1=1;
var c2=2;
var c3=3;
var c4=4;
var c5=5;
var c= `${c1}, ${c2}, ${c3}, ${c4}, ${c5}`;
//console.log(c);
// Create an array that has 4 numbers, 2 strings, 3 comparisons, another array with 3 elements inside.
var d=[1,2,3,4,"a","b",1<2,2==3,3>4,[1,"c",9]];

// Create an object that has 4 properties: A number, a string, an array, and an object
var car = {
  type:"Fiat",
  num:1,
  color:["blue","red"],
  name:{name1:"toyota"}};
// Create 5 variables in a js file that is linked to your html file 




var h2 = document.querySelector("h2");
var p = document.querySelector(".p");
var i = document.querySelector("#i");
var inp = document.querySelector("input[type]");
var button = document.querySelector("button");
var src = document.querySelector("#src")



function doStuff(input,src){
  i.innerHTML += `img src="${src}" alt="PSController"/>`;
  p.textContent+= input;
}

function loopIt(num){
  for(var i=1;i<=num;i++){
          doStuff(input.value, "https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg");
  }
}


button.addEventListener("click", function(){
 
  loopIt(4);
})




