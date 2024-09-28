import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PetsManagementComponent } from './manage/pages/pets-management/pets-management.component';
import { ClientsManagementComponent } from './manage/pages/clients-management/clients-management.component';
import { EventsManagementComponent } from './manage/pages/events-management/events-management.component';
import { LoginComponent } from './public/pages/login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'manage/pets', component: PetsManagementComponent},
    {path: 'manage/clients', component: ClientsManagementComponent},
    {path: 'manage/events', component: EventsManagementComponent},
    {path: '**', component: PageNotFoundComponent},
];
