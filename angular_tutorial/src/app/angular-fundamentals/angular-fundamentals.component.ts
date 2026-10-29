import { Component } from '@angular/core';
import { DataBindingLabComponent } from './data-binding-lab/data-binding-lab.component';
import { DirectivesControlFlowComponent } from './directives-control-flow/directives-control-flow.component';
import { ComponentsDataBindingDeepDiveComponent } from './components-data-binding-deep-dive/components-data-binding-deep-dive.component';

@Component({
  selector: 'app-angular-fundamentals',
  standalone: true,
  imports: [DataBindingLabComponent, DirectivesControlFlowComponent, ComponentsDataBindingDeepDiveComponent],
  templateUrl: './angular-fundamentals.component.html',
  styleUrl: './angular-fundamentals.component.css'
})
export class AngularFundamentalsComponent {

  students = [
    { id: 1, name: 'Krishav', marks: 80 },
    { id: 2, name: 'Anup', marks: 90 },
  ];

}
