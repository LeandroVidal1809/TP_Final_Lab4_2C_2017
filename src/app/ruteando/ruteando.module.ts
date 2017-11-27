import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrincipalComponent} from '../componentes/principal/principal.component';
import {LoginComponent} from '../componentes/login/login.component';
import { RouterModule, Routes } from '@angular/router';

// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'Principal' , component: PrincipalComponent},
{path: '' , component: LoginComponent},

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
