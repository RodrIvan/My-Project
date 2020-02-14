import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas en el imports
import { APP_ROUTES, appRoutingProviders } from './app.routes';
import { PAGES_ROUTES } from './pages/pages.routes';
import { AppRoutingModule } from './app-routing.module';

// importo modulos - con sus respectivos componentes
import { PagesModule } from './pages/pages.module';

 
// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// import { NotfoundComponent } from './shared/notfound/notfound.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { GraphicComponent } from './pages/graphic/graphic.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// Comento porque se carga el modulo PageModule en app.module.ts
// import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // NotfoundComponent,
    /* DashboardComponent,
    GraphicComponent,
    ProgressComponent, */
    /* HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent, */
    // PagesComponent,
  ],
  // cargo APP_ROUTES
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
