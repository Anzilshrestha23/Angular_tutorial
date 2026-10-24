import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-lab',
  standalone: true,
  imports: [],
  templateUrl: './data-binding-lab.component.html',
  styleUrl: './data-binding-lab.component.css'
})
export class DataBindingLabComponent {
  name : string = "User"
  isoff: boolean = true;
  studentName: string ="";

  sayhi(){
    console.log("Hi");
  }
}
