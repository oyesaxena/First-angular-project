import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'home page'
    },
    {
        path:'detail/:id',
        component:DetailsComponent,
        title:'detail'
    }
];
