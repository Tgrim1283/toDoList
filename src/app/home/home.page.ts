import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputVal!: String;
  constructor() {}

  buttonClick(){
    console.log("Button function is working");
    alert("This works!");
  }

}
