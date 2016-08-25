import {Routes,RouterModule} from '@angular/router';
import {HeroesComponent } from './hero.component';
import {DashboardComponent } from './dashboard.component';
import {HeroDetailComponent } from './hero-detail.component';


const appRoutes:Routes = [
   {
		path:'hero',
		component:HeroesComponent
   },
   {
	   	path:'dashboard',
	   	component:DashboardComponent
   },
   {
	   	path:'',
	   	redirectTo:'/dashboard',
	   	 pathMatch: 'full'
   },
   {
   	path:'detail/:id',
   	component:HeroDetailComponent


   }
];

export const routing = RouterModule.forRoot(appRoutes);