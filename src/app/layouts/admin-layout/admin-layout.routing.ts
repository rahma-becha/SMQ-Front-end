import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ListRisquesComponent } from '../../risques/list-risques/list-risques.component';
import { ListReclamationComponent } from '../../reclamations/list-reclamation/list-reclamation.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'reclamations',   component: ListReclamationComponent },
    { path: 'risques',   component: ListRisquesComponent },
];
