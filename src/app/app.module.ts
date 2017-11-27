import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuteandoModule } from './ruteando/ruteando.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MiHttpService } from  './servicios/mi-http.service';
import { PersonaService } from  './servicios/persona.service';
import { ArchivoPersonaService } from  './servicios/archivo-persona.service';
 import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    PrincipalComponent,
    LoginComponent
  ],
  entryComponents: [
  BotonComponent
  ],
  imports: [
    BrowserModule,
    RuteandoModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  providers: [MiHttpService,PersonaService,ArchivoPersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
