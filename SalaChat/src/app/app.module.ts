import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageFromComponent } from './Components/message-from/message-from.component';
import { MessageListComponent } from './Components/message-list/message-list.component';
import { RoomComponent } from './Components/room/room.component';
import { UserComponent } from './Components/user/user.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MessageFromComponent,
    MessageListComponent,
    RoomComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
