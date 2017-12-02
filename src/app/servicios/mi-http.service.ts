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
