import { Injectable } from '@angular/core';
import {ArchivoPersonaService} from './archivo-persona.service';

@Injectable()
export class PersonaService {

  constructor(private AP:ArchivoPersonaService) { }


  TraerDatos()
  {
   return this.AP.APIGet("persona/")
   .then(lista=>lista)
   .catch(e=>e);
  }

  GenerarToken(username:string,password:string, callback: (token: string) => void)
  {
   
      this.AP.APIPostJWT("ingreso/",username,password, token => { 
      callback(token);
    });
   
   
    // .then(jwt=>jwt)
    // .catch(e=>e);
  }
}
