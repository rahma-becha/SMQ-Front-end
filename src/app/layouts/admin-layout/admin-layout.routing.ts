import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ListRisquesComponent } from '../../risques/list-risques/list-risques.component';
import { ListReclamationComponent } from '../../reclamations/list-reclamation/list-reclamation.component';
import { AddReclamationComponent } from '../../reclamations/add-reclamation/add-reclamation.component';
import { EditReclamationComponent } from '../../reclamations/edit-reclamation/edit-reclamation.component';
import { AddRisquesComponent } from '../../risques/add-risques/add-risques.component';
import { EditRisquesComponent } from '../../risques/edit-risques/edit-risques.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'reclamations',   component: ListReclamationComponent },
    { path: 'risques',   component: ListRisquesComponent },
    {path:'reclamations/add',component:AddReclamationComponent},
    {path:'reclamations/edit/:id',component:EditReclamationComponent},
    { path: 'risques/add',   component: AddRisquesComponent },
    {path:'risques/edit/:id',component:EditRisquesComponent}
];
