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
  @Input() actualUserRoom:Usuario;
  @Output() sendRooms=new EventEmitter;

  constructor() { 
    this.rooms=[];
    let sala1 = new Sala(1,"public");
    this.rooms.push(sala1);

    let sala2 = new Sala(2,"public");
    this.rooms.push(sala2);

  }



  setActualRoom(actual:Sala)
  {
    this.actualRoom=actual;
  }



}
