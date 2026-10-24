import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AngularFundamentalsComponent } from './angular-fundamentals/angular-fundamentals.component';
import { DataBindingLabComponent } from './angular-fundamentals/data-binding-lab/data-binding-lab.component';


export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'angular-fundamentals', component: AngularFundamentalsComponent},
    {path: 'data-binding', component: DataBindingLabComponent}
]