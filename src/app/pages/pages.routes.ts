import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';
import { PagesComponent } from './pages.component';

const pageRoutes: Routes = [
    {
        path: '',
    component: PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graphic', component: GraphicComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
    }];
// son rutas internas o router outlets forChild
export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);
