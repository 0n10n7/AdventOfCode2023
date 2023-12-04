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
for(let i = 1; i < array.length-1; i++){
    console.log(i);
    let temp = array[i];
    console.log(temp);
    let valid = true;
    let undecided = 0;
    for(let j = 1; j < temp.length-1; j++){
        if(hasNumbers(temp[j])){
            undecided += temp[j];
            valid = true;
        }
        switch (temp[j]) {
            case '.':
                if(valid){
                    for(let x = -1; x <= undecided.length; x++){
                        for(let y = -1; y < 2; y++){
                            console.log(array[j-1][i],j,x,y);
                            let char = array[j-x][i+y];
                            switch (char) {
                                case '.':
                                    
                                    break;
                                case ' ':
                                    
                                    break;
                            
                                default:
                                    output += Number(undecided);
                                    break;
                            }
                        }
                    }   
                    undecided = 0;
                }
                valid = false;
                break;
            default:
                break;
        }
    }
}

// for(let i = 0 ; i < outputArray.length; i ++){
//     output+=Number(outputArray[i]);
// }

console.log(output);
