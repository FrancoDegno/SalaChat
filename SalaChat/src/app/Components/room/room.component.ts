import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Sala } from '../../Classes/sala';
import { Usuario } from '../../Classes/Usuario';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent{

  rooms:Sala[];
  actualRoom:Sala;
  newSalaName:String;
  @Input() actualUserRoom:Usuario;
  @Output() sendRooms=new EventEmitter;
  salaid:number=0;

  constructor() { 
    this.rooms=[];
    let sala1 = new Sala(this.salaid,"sala1");
    sala1.addMsj(-1,"Sala1","");
    this.rooms.push(sala1);

    this.salaid++;
    let sala2 = new Sala(this.salaid,"sala2");
    sala2.addMsj(-1,"Sala2","");
    this.salaid++;
    this.rooms.push(sala2);

  }

  createRoom()
  {
    let sala = new Sala(this.salaid,this.newSalaName);
    sala.addMsj(-1,sala.name,"");
    this.rooms.push(sala);
  }

  setActualRoom(actual:Sala)
  {
    this.actualRoom=actual;
  }



}
