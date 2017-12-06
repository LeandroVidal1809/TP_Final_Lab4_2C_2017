import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuteandoModule } from './ruteando/ruteando.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MiHttpService } from  './servicios/mi-http.service';
import { ReCaptchaService } from  './servicios/captcha.service';
import { PersonaService } from  './servicios/persona.service';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ArchivoPersonaService } from  './servicios/archivo-persona.service';
 import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LoginComponent } from './componentes/login/login.component';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import { ReCaptchaModule } from 'angular2-recaptcha';
import * as $ from 'jquery';
import './componentes/reservas/form.js';
import { AgmCoreModule,AgmPolygon } from '@agm/core';
import { CargamesaComponent } from './componentes/cargamesa/cargamesa.component';
import {CalendarModule} from 'primeng/primeng';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InvitadoComponent } from './componentes/invitado/invitado.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    PrincipalComponent,
    LoginComponent,
    ReservasComponent,
    CargamesaComponent,
    InicioComponent,
    InvitadoComponent,
    ListadoComponent,
    EncuestaComponent
  ],
  entryComponents: [
  BotonComponent
  ],
  imports: [
    BrowserModule,
    RuteandoModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SmartTableModule,CalendarModule,ReCaptchaModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJrPfoumPHv_0Llsvr5rkEMldC2YNd8cc',
      libraries: ["places"]
    }),
    
  ],
  providers: [MiHttpService,PersonaService,CalendarModule,ReCaptchaService,ArchivoPersonaService, NguiDatetimePickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
