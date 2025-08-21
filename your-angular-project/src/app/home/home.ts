import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ RouterModule, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
menuOption: string = '';
onOption(menuOption: string){
  this.menuOption = menuOption;
}
}
