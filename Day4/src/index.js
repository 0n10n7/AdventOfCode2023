import { escapeHTML } from "bun";
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
for(let i = 0; i < array.length; i++){
    let temp = array[i];
    console.log(temp);
    let verticalLine = false;
    let undecided = 0;
    let first = [];
    let second = [];
    let id = 0;
    while(true){
        for(let j = 0; j < temp.length; j++){
            if(hasNumbers(temp[j])){
                undecided += temp[j];
            }
            switch (temp[j]){
                case ' ':
                    if(Number(undecided)!=0){
                        if(verticalLine){
                            second.push(Number(undecided));
                        }
                        else{
                            first.push(Number(undecided));
                        }
                    }
                    undecided = 0;
                    break;
                case ':':
                    id = Number(undecided);
                    undecided = 0;
                    break;
                case '|':
                    verticalLine = true;
                default:
                    break;
            }
        }
        let matches = 0;
        for(let j = 0; j < first.length; j ++){
            for(let k = 0; k < second.length; k ++){
                console.log(`comparing ${first[j]} and ${second[k]}`)
                if(first[j]===second[k]){
                    // if(Number(matches) === 0){
                    //     matches=1;
                    // }
                    // else{
                    //     matches*=2;
                    // }
                    matches++;
                    console.log(first[j],second[k]);
                }
            }
        }
        console.log(matches);
        //output+=Number(matches);
        output++;
    }
    
}


// for(let i = 0 ; i < outputArray.length; i ++){
//     output+=Number(outputArray[i]);
// }

console.log(output);
