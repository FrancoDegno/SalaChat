import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Usuario } from '../../Classes/usuario';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user:Usuario = new Usuario();
  @Output() usserLogged= new EventEmitter();

  constructor() { }
 loginUser()
  {
    this.usserLogged.emit(this.user);
  }

}
