import { Component } from '@angular/core';
import { DataBindingLabComponent } from './data-binding-lab/data-binding-lab.component';
import { DirectivesControlFlowComponent } from './directives-control-flow/directives-control-flow.component';

@Component({
  selector: 'app-angular-fundamentals',
  standalone: true,
  imports: [ DataBindingLabComponent , DirectivesControlFlowComponent],
  templateUrl: './angular-fundamentals.component.html',
  styleUrl: './angular-fundamentals.component.css'
})
export class AngularFundamentalsComponent {

}
