import { Component } from '@angular/core';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { DataBindingLabComponent } from './data-binding-lab/data-binding-lab.component';

@Component({
  selector: 'app-angular-fundamentals',
  standalone: true,
  imports: [StringInterpolationComponent , DataBindingLabComponent],
  templateUrl: './angular-fundamentals.component.html',
  styleUrl: './angular-fundamentals.component.css'
})
export class AngularFundamentalsComponent {

}
