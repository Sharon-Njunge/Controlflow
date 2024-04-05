//Write a program that takes in an array of numbers and consoles the first four item multiplied by itself and the last two added by 10.Return the
//new array with new values.

function numSquares(numbers){
    newArr = []
    let numArr1 = numbers.slice(0,4)
    let numArr2 = numbers.slice(-2)

    numArr1.forEach(i=>{
        console.log(i*i);
    })

    numArr2.forEach(i=>{
        console.log(i+10);
    })
    newArr.push(numArr1)
    newArr.push(numArr2)
}
    numSquares([3,4,5,6,7,8,9,1])

    //Write a program that takes in the following array and uses a while loop to iterate and break when the item is equal to the fourth index 
 //let arrNum = [1,2,3,4,5,6,7,8,9]
 function numArray(){
    let arrNum = [1,2,3,4,5,6,7,8,9]

    let text = " ";
    let i = 0;

    while(i < 5){
        text += i + "<br>";
        i++;
        if(i===4)break;     
    }
 }
 numArray()

// Write a function that takes in an array of strings and use a continue statement when the item is at the second index.
// let fruits = ["apple", "plum", "banana", "strawberries", "kiwi" ]
function desertStrings(){
    let fruits = ["apple", "plum", "banana", "strawberries", "kiwi"]
    let text = " "
    for (let index = 0; index < fruits.length; index++) {
       if (fruits[2]==="banana") {
        continue;
       }
        text += fruits[i] + "<br>"
    }
}
console.log("text");
desertStrings()

// Write a function that accepts an array of strings and console.logs each element using a for loop.
function loopArray(){
    stringArr.forEach(element =>{
        console.log(element);
    });

}
let stringArr = ["num1", "num2", "num3", "num4"]
loopArray();


// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
function reverseString(str){ 
    const reversedString = 
    str.split("").reduce((acc, char) => char + acc, ""); 
    console.log(reversedString); 
} 
reverseString("Google"); 
reverseString("Python"); 
reverseString("Sharon"); 









