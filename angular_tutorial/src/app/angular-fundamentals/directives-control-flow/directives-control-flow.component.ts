import { NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-control-flow',
  standalone: true,
  imports: [FormsModule, NgSwitch],
  templateUrl: './directives-control-flow.component.html',
  styleUrl: './directives-control-flow.component.css'
})
export class DirectivesControlFlowComponent {
   marks : number = 100;
   grade : string = '';
}