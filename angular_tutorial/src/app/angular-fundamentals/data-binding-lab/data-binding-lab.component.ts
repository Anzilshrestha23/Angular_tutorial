import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-lab',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-lab.component.html',
  styleUrl: './data-binding-lab.component.css'
})
export class DataBindingLabComponent {
  name : string = "User"
  isoff: boolean = true;
  studentName: string ="";
  username: string= "";
  selectedCourse: string = '';
  character: string= '';

}
