import { CONNREFUSED } from "dns";

const file = Bun.file("src/input.txt");

let input = await file.text();

let array = input.split("\n");
let output = 0;

function hasNumbers(t)
{
var regex = /\d/g;
return regex.test(t);
}    
let red = 0;
let green = 0;
let blue = 0;
let currentWord = '';
let undecided = 0;
let valid = true;


for(let i = 0; i < array.length; i++){
    let redMax = 0;
    let greenMax = 0;
    let blueMax = 0;
    let red = 0;
    let green = 0;
    let blue = 0;
    let currentWord = '';
    let undecided = 0;
    let valid = true;
    let temp = array[i];
    let id =0;
    console.log(temp);
    for(let j = 0; j < temp.length; j++){
        if(hasNumbers(temp[j])){
            undecided += temp[j];
        }
        switch (temp[j]) {
            case ',':
                break;
            case ';':
                if((red > 12)||(green > 13)||(blue > 14)){
                    console.log(`${red} red ${green} green ${blue} blue is not valid`);
                    valid = false;
                }
                else{
                    console.log(`${red} red ${green} green ${blue} blue is valid`);
                }
                red = 0;
                green = 0;
                blue = 0;
                break;
            case ' ':
                currentWord = '';
                break;
            case ':':
                id +=Number(undecided);
                undecided = 0;
                red = 0;
                green = 0;
                blue = 0;
                break;
            default:
                currentWord += temp[j];
                switch (currentWord) {
                    case 'red':
                        red = Number(undecided);
                        if(red > redMax) redMax = red;
                        undecided = 0;
                        break;
                    case 'green':
                        green = Number(undecided);
                        if(green > greenMax) greenMax = green;
                        undecided = 0;
                        break;
                    case 'blue':
                        blue = Number(undecided);
                        if(blue > blueMax) blueMax = blue;
                        undecided = 0;
                        break;
                    default:
                        break;
                }
                break;
        }
    }
    if(valid){
        //output += id;
    }
    output += (blueMax*redMax*greenMax);
}

// for(let i = 0 ; i < outputArray.length; i ++){
//     output+=Number(outputArray[i]);
// }

console.log(output);
