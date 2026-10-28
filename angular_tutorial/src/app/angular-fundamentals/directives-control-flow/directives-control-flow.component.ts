import { NgStyle, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-control-flow',
  standalone: true,
  imports: [FormsModule, NgSwitch,NgStyle],
  templateUrl: './directives-control-flow.component.html',
  styleUrl: './directives-control-flow.component.css'
})
export class DirectivesControlFlowComponent {
  marks: number =  70;
  grade: string = '';
  //  students =['Anzil','Rancho','Ranbir','Krishav'];
  students = [
    { id: 102, name: 'Anzil', marks: 85 },
    { id: 101, name: 'Aarav', marks: 72 },
    { id: 103, name: 'Sita', marks: 91 }
  ];

  numbers = [1, 2, 3, 4]
  elements=['hydrogen', 'helium', 'lithium'];
  fontsize = 24;
}

// using the ngstyle binding