import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AngularFundamentalsComponent } from './angular-fundamentals/angular-fundamentals.component';


export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'angular-fundamentals', component: AngularFundamentalsComponent}
];
