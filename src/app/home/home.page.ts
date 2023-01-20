import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskName : any = "";
  taskList : String[] = [];
  constructor() {}

  enterItem(){
    console.log("Button function is working");
    if (this.taskName.length > 0) {
      let task = this.taskName;
      console.log(task);
      this.taskList.push(task);
      this.taskName = '';
  }
}

deleteTask(index: number) {
this.taskList.splice(index, 1);
}
}


