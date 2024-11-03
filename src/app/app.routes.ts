import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PetsManagementComponent } from './manage/pages/pets-management/pets-management.component';
import { ClientsManagementComponent } from './manage/pages/clients-management/clients-management.component';
import { EventsManagementComponent } from './manage/pages/events-management/events-management.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { ClientCreateComponent } from './manage/components/client-create/client-create.component';
import { EventCreateComponent } from './manage/components/event-create/event-create.component';
import { PetCreateComponent } from './manage/components/pet-create/pet-create.component';
/*import {
  MedicalHistoryManagementComponent
} from "./manage/pages/medicalHistory-management/medical-history-management.component";*/

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    /*{path: 'manage/medicalHistory', component: MedicalHistoryManagementComponent},*/
    {path: 'manage/pets', component: PetsManagementComponent},
    {path: 'manage/pets/add', component: PetCreateComponent},
    {path: 'manage/clients/add', component: ClientCreateComponent},
    {path: 'manage/clients', component: ClientsManagementComponent},
    {path: 'manage/events', component: EventsManagementComponent},
    {path: 'manage/events/add', component: EventCreateComponent},
    {path: '**', component: PageNotFoundComponent},
];
