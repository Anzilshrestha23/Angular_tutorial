import { Component } from '@angular/core';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

@Component({
  selector: 'app-angular-fundamentals',
  standalone: true,
  imports: [StringInterpolationComponent],
  templateUrl: './angular-fundamentals.component.html',
  styleUrl: './angular-fundamentals.component.css'
})
export class AngularFundamentalsComponent {

}
