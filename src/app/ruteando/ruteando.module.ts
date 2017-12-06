import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrincipalComponent} from '../componentes/principal/principal.component';
import {LoginComponent} from '../componentes/login/login.component';
import {ReservasComponent} from '../componentes/reservas/reservas.component';
import {CargamesaComponent} from '../componentes/cargamesa/cargamesa.component';
import {InvitadoComponent} from '../componentes/invitado/invitado.component';
import {ListadoComponent} from '../componentes/listado/listado.component';
import {InicioComponent} from '../componentes/inicio/inicio.component';
import {EncuestaComponent} from '../componentes/encuesta/encuesta.component';
import { RouterModule, Routes } from '@angular/router';

// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'Principal' , component: PrincipalComponent},
{path: 'CargarMesas' , component: CargamesaComponent},
{path: 'Invitados' , component: InvitadoComponent},
{path: 'Reservas' , component: ReservasComponent},
{path: 'Listado' , component: ListadoComponent},
{path: 'Encuesta' , component: EncuestaComponent},
{path: 'Login' , component: LoginComponent},
{path: '' , component: InicioComponent},

]


@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
