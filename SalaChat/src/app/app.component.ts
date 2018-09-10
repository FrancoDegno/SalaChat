import { Component } from '@angular/core';
import { Usuario } from './Classes/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SalaChat';
  newUser:Usuario;
  acum:number;
  createUser(name:String)
  {
    this.newUser= new Usuario();
    this.newUser.name=name;
    this.newUser.id=this.acum;
    this.acum++;
    console.log("Create user Success");

  }

}
