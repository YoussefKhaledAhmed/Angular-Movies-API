import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'home' , component:HomeComponent , title:'home'},
    {path:'popular' , component:PopularComponent , title:'popular'},
    {path:'upcoming' , component:UpcomingComponent , title:'upcoming'}
];
