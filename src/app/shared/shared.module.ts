import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        BreadcrumsComponent,
        HeaderComponent,
        NotfoundComponent,
        SidebarComponent
    ],
    // Exporto componentes que son accesados desde afuera
    exports: [
        BreadcrumsComponent,
        HeaderComponent,
        NotfoundComponent,
        SidebarComponent
    ]
})

export class SharedModule { }
