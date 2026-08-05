import { Component } from '@angular/core';
import { Layout } from './layout/layout'; 
import { HomeComponent } from './home-component/home-component'; 

@Component({
  selector: 'app-root',
  imports: [Layout, HomeComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }