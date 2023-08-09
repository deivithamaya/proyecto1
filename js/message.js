import {default as importMessages} from "./dataMessage.js";

class Messange{
    constructor(newFirst=null,newSecond=null,newThrid=null,typeMessage=null,numberToStructure=3){
        this._words=importMessages;
        this._params=[newFirst,newSecond,newThrid];
        this._typeMessage= typeMessage;
        this._numberStructure= numberToStructure;
        for(let i = 0;i<this._params.length;i++){
            if(this._params[i]!=null){
                this._words[i].push(this._params[i]);
            }
        }
    }

    get words(){
        return this._words;
    }

    addWords(arr){
        try{
            if(arr.length >this._numberStructure)throw new Error("the words is compound of three elements, try add space in the structure");
            for(let i = 0; i<arr.length;i++){
                if(arr[i]!=null){
                    this._words[i].push(arr[i]);
                }
            }
        }catch(e){
            console.log(`An error has ocurred: ${e}`);
        }
    }

    newMessage(){
        let newString="";
        try{
            let ramdomMessages = this._words.map((arr)=>{
            let length = arr.length;
            return arr[Math.floor(Math.random()*length)];
            });

            for(let i=0;i<ramdomMessages.length;i++){
                if(i==ramdomMessages.length-1){
                    newString+= "and "+ramdomMessages[i]+".";
                    break;
                }
                newString+=ramdomMessages[i]+", ";
            }

            return newString;

        }
        catch(e){
            console.log(`An error has ocurred:${e}`);
        }

    }

    createNewStructure(arr){
        try{
            if(arr==null) throw new Erro("the array is empty");
            this._words.push(arr);
            this._numberStructure+=1;
        }catch(e){
            console.log(`An error has ocurred ${e}`);
        }
    }

}

export {Messange}