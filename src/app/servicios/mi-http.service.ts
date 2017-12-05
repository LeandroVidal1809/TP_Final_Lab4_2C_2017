import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } 
from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Usuario } from '../Clases/Usuario';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class MiHttpService {
  headers: Headers;
  options: RequestOptions;
  obs:Observable<any>;
  constructor(private http:Http) { }


  postjwt(url:string,username:string,password:string, callback: (r: Response) => void)
  {
  let data = new URLSearchParams();
   data.append('usuario',username);
   data.append('clave', password);
       this.http
      .post(url,data)
      .map(res => res)  
      .subscribe(callback, 
        error => {
          alert("Usuario y/o Clave no son validos");
        });
  }

  PostReservar( url:string,fecha:string , callback: (r: Response) => void)
  {
    
    var cliente = localStorage.getItem("cliente");
    var salon = localStorage.getItem("Tipo");
    let data = new URLSearchParams();
    var md = Md5.hashStr(cliente+fecha);
    data.append('fecha',fecha);
    data.append('cliente', cliente);
    data.append('salon',salon);
    debugger;
    data.append('hash',md.toString());
    debugger;
        this.http
       .post(url,data)
       .map(res => res)  
       .subscribe(callback, 
         error => {
           alert("Ocurrio un error al registrarse" );
         });
   
  }


  PostTraeReservas( url:string, callback: (r: Response) => void)
  {
    
    var cliente = localStorage.getItem("cliente");
    var salon = localStorage.getItem("Tipo");
    let data = new URLSearchParams();
    data.append('cliente', cliente);
    data.append('salon',salon);
        this.http
       .post(url,data)
       .map(res => res)  
       .subscribe(callback, 
         error => {
           alert("Ocurrio un error al registrarse" );
         });
   
  }
  PostTraeHash( url:string,hash:string, callback: (r: Response) => void)
  {
    
    //alert(hash);
    let data = new URLSearchParams();
    data.append('hash', hash);
        this.http
       .post(url,data)
       .map(res => res)  
       .subscribe(callback, 
         error => {
           alert("Ocurrio un error al registrarse" );
         });
   
  }
  

  PostCargaMesa(url:string,fecha:string,mesa:string,salon:string,lista:Array<any>, callback: (r: Response) => void)
  {
  let data = new URLSearchParams();

   data.append('fecha',fecha);
   data.append('mesa',mesa);
   data.append('salon',salon);
   data.append('invitado1', lista[0]);
   data.append('invitado2', lista[1]);
   data.append('invitado3', lista[2]);
   data.append('invitado4', lista[3]);
   data.append('invitado5', lista[4]);
   data.append('invitado6', lista[5]);
   data.append('invitado7', lista[6]);
   data.append('invitado8', lista[7]);
   data.append('invitado9', lista[8]);
   data.append('invitado10', lista[9]);


   debugger;
       this.http
      .post(url,data)
      .map(res => res)  
      .subscribe(callback, 
        error => {
          alert("Ocurrio un error al registrarse" );
        });
  }
 
  PostRegistrar(url:string,unUser:Usuario, callback: (r: Response) => void)
  {
  let data = new URLSearchParams();
   data.append('usuario',unUser.Usuario);
   data.append('clave', unUser.Clave);
   data.append('nombre', unUser.Nombre);
   data.append('tipo', "Cliente");
   data.append('email', unUser.Email) ;
   debugger;
       this.http
      .post(url,data)
      .map(res => res)  
      .subscribe(callback, 
        error => {
          alert("Ocurrio un error al registrarse" );
        });
  }
  dameunapromesa(url:string)
  {
    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.manejadorDeError);
  }
  manejadorDeError(error:Response|any)
  { 
    console.log(error);
        return error;
  }

  extraerDatos(respuesta:Response)
  {
        console.log(respuesta);
        return respuesta.json()||{};
  }
}


  
  //   let data = new URLSearchParams();
  //   data.append('usuario',"ssaa");
  //   data.append('clave', "ss");
  // debugger;
  //  return this.http
  //     .post("http://localhost:8080/ApiSegundoParcial/api/index.php/ingreso/", data)
  //       .subscribe(data => {
  //         debugger;
  //            console.log(data);
  //       }, error => {
  //         debugger
  //           console.log(error.json());
  //       });
