import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ChartComponent } from './chart/chart.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'search', component:SearchComponent},
    {path: 'login', component:LoginComponent},
    {path: 'details/:movieId', component: DetailsComponent},
    {path: 'details/:movieId/chart', component: ChartComponent},
    {path: 'user', component: UserComponent},
    {path: '**', redirectTo: ''}

];
