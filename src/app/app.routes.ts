// modulo de rutas de angular
import { Routes, RouterModule } from '@angular/router';

// componentes
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { GraphicComponent } from './pages/graphic/graphic.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const appRoutes: Routes = [
     /*{
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graphic', component: GraphicComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }, */
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotfoundComponent }
];
// inicializo rutas
export const appRoutingProviders: any[] = [];

// Declaro rutas gral con forRoot
export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
// se debe cargar en el modulo toda definicion del Modulo -> RouteModule
