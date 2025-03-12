import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { MapComponentComponent } from './components/map-component/map-component.component';
import { verificarGuard } from './guard/verificar.guard';
import { MysocketComponent } from './components/mysocket/mysocket.component';

export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'home', component: HomeComponent},
    {path : 'index', component: HomeComponent},
    {path : 'details/:id', canActivate:[verificarGuard] ,component: DetailsComponent},
    {path : 'maps', component: MapComponentComponent},
    {path : 'socket', component: MysocketComponent},
    {path: '**', component: HomeComponent }
];
