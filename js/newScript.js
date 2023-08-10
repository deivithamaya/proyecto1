import { Messange as classMessage } from "./message.js";

console.log("entre");   
document.getElementById('button').onclick=newRandomMessage;
let param = document.getElementById("param");
param.style.display="none";

function  newRandomMessage(){   
    let newMessage = new classMessage(null,null,null,"happy message");
    
    param.innerHTML=newMessage.newMessage();
    param.style.display="block";
    

}



