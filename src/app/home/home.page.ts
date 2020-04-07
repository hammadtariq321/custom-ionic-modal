import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  customModal:boolean = false;

  constructor() {}

  openModal() {
    this.customModal = true;
    console.log('modal Opened ')
  }
  
  closeModal() {
    this.customModal = false;
    console.log('modal Closed ')

  }

}
