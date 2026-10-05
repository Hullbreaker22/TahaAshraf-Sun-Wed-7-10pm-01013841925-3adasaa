import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Navbar } from './Layout/navbar/navbar';
import { We } from './Pages/we/we';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Navbar  , We ],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {

}
