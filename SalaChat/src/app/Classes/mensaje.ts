export class Mensaje {
    roomid:number;
    text:String;
    userName:String;

    constructor(i:number,t:String,user:String)
    {
        this.userName=user;
        this.text=t;
        this.roomid=i;
    }
}
