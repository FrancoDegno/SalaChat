import { Component, OnInit,Input } from '@angular/core';
import { Sala } from '../../Classes/Sala';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  @Input() actualRoom:Sala;

  constructor() {}



}
