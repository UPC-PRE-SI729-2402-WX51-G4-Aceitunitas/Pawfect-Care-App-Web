import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PetsManagementComponent } from './manage/pages/pets-management/pets-management.component';
import { AppointmentsManagementComponent } from "./manage/pages/appointments-management/appointments-management.component";
import { ClientsManagementComponent } from './manage/pages/clients-management/clients-management.component';
import {AppointmentCreateComponent} from "./manage/components/appointment-create/appointment-create.component";
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { ClientCreateComponent } from './manage/components/client-create/client-create.component';
import { PetCreateComponent } from './manage/components/pet-create/pet-create.component';
import { PetEditComponent } from './manage/components/pet-edit/pet-edit.component';
import { ClientEditComponent } from './manage/components/client-edit/client-edit.component';
import {AppointmentEditComponent} from "./manage/components/appointment-edit/appointment-edit.component";
import { MedicalHistoryManagementComponent } from "./manage/pages/medicalHistory-management/medical-history-management.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'manage/medicalHistory/:id', component: MedicalHistoryManagementComponent },
    {path: 'manage/pets', component: PetsManagementComponent},
    {path: 'manage/pets/add', component: PetCreateComponent},
    {path: 'manage/pets/edit/:id', component: PetEditComponent},
    {path: 'manage/clients/add', component: ClientCreateComponent},
    {path: 'manage/clients/edit/:id', component: ClientEditComponent},
    {path: 'manage/clients', component: ClientsManagementComponent},
    {path: 'manage/appointments', component: AppointmentsManagementComponent},
    {path: 'manage/appointments/add', component: AppointmentCreateComponent},
    {path: 'manage/appointments/edit/:id', component: AppointmentEditComponent},
    {path: '**', component: PageNotFoundComponent},
];
