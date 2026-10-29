import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-components-data-binding-deep-dive',
  standalone: true,
  imports: [],
  templateUrl: './components-data-binding-deep-dive.component.html',
  styleUrl: './components-data-binding-deep-dive.component.css'
})
export class ComponentsDataBindingDeepDiveComponent {
  @Input() name = '';
  @Input() marks = 0;

}
