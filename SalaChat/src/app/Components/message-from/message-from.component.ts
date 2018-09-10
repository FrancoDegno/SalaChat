import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Mensaje } from '../../Classes/Mensaje';
import { Sala } from '../../Classes/Sala';
import { Usuario } from '../../Classes/Usuario';

@Component({
  selector: 'app-message-from',
  templateUrl: './message-from.component.html',
  styleUrls: ['./message-from.component.css']
})
export class MessageFromComponent {

  msj:String;
  @Input() actualRoom:Sala;
  @Input() actualUserMsj:Usuario;
  constructor() { }

  createMsj()
  {
    this.actualRoom.addMsj(this.actualRoom.id,this.msj,this.actualUserMsj.name);
    console.log("Success");

  }

}
