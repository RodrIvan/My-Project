import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas en el imports
import { APP_ROUTES, appRoutingProviders } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphicComponent } from './pages/graphic/graphic.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    DashboardComponent,
    GraphicComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    ProgressComponent,
    PagesComponent,
    RegisterComponent
  ],
  // cargo APP_ROUTES
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
