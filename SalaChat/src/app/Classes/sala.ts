import { Mensaje } from "./Mensaje";

export class Sala {
    id:number;
    name:String;
    messages: Mensaje[];

    constructor(i:number,n:String)
    {
        this.id=i;
        this.name=n;
        this.messages=[];
    }

    addMsj(i:number,t:String,u:String)
    {
        

        this.messages.push(new Mensaje(i,t,u));
 

    }

}
