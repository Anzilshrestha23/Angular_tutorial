import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 navigationItem = [
    {name: "Home", url: "/home", icon: "🏠" },
    {name: "About", url: "/about", icon: "💡"},
    {name: "Angular Fundamentals", url: "/angular-fundamentals", icon: "🅰️"}
  ]
};