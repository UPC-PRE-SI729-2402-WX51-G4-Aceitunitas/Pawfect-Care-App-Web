import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PetsManagementComponent } from './manage/pages/pets-management/pets-management.component';
import { ClientsManagementComponent } from './manage/pages/clients-management/clients-management.component';
import {
  EventsManagementComponent
} from './manage/pages/events-management/events-management.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'manage/pets', component: PetsManagementComponent},
    {path: 'manage/clients', component: ClientsManagementComponent},
    {path: 'manage/events', component: EventsManagementComponent},
    {path: '**', component: PageNotFoundComponent},
];
