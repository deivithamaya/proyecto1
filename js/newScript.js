import { Messange as classMessage } from "./message.js";

let button=document.getElementById("button");
let param = document.getElementById("param");


button.onclick=newRandomMessage;



function  newRandomMessage(){   
    let newMessage = new classMessage(null,null,null,"happy message");
    param.innerHTML=newMessage.newMessage();
    param.style.display="block";
}



