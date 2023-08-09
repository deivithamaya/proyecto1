import { Messange as classMessage } from "./message.js";

const newRandomNumbers = ()=>{   
    try{
        randomNumbers = words.map((arr)=>{
        let length = arr.length;
        return Math.floor(Math.random()*length);
    });
    }catch(e){
        console.log("ha ocurrido un error");
    }
}

let newWord = ["finally"];
const newMessage = new classMessage();
newMessage.createNewStructure(newWord);
console.log(newMessage.words);
console.log(newMessage.newMessage());


