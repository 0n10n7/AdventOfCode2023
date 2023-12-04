console.log("Hello via Bun!");

const file = Bun.file("src/input.txt");

let input = await file.text();

let array = input.split("\n");
let outputArray = [];
let output = 0;

function hasNumbers(t)
{
var regex = /\d/g;
return regex.test(t);
}    


for(let i = 0; i < array.length; i++){
    let temp = array[i];
    let first;
    let last;
    console.log(temp);
    temp = temp.replaceAll("one","one1one");
    temp = temp.replaceAll("two","two2two");
    temp = temp.replaceAll("three","three3three");
    temp = temp.replaceAll("four","four4four");
    temp = temp.replaceAll("five","five5five");
    temp = temp.replaceAll("six","six6six");
    temp = temp.replaceAll("seven","seven7seven");
    temp = temp.replaceAll("eight","eight8eight");
    temp = temp.replaceAll("nine","nine9nine");


    console.log(temp);
    for(let j = 0; j < temp.length; j++){
        if(hasNumbers(temp[j])){
            if (typeof first === "undefined"){
                first = temp[j];
            }
            last = temp[j];
        }
    }
    console.log(first + last);
    outputArray.push(first + last);
}
for(let i = 0 ; i < outputArray.length; i ++){
    output+=Number(outputArray[i]);
}

console.log(output);