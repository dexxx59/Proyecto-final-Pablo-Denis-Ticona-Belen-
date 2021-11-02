import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormusuarioComponent } from './components/usuarios/formusuario/formusuario.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { MenuComponent } from './ui/menu/menu.component';
import{AppRoutingModule} from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { ReclamoComponent } from './components/reclamo/reclamo.component';
import { PanelCentralComponent } from './ui/panel-central/panel-central.component';
import { FichaComponent } from './ui/ficha/ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    FormusuarioComponent,
    LayoutComponent,
    MenuComponent,
    ReclamoComponent,
    PanelCentralComponent,
    FichaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
