import { Component, OnInit } from '@angular/core';
import { PersonaService } from  '../../servicios/persona.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from '../../Clases/Usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  tipoUsuario:string;
  cambia:boolean;
  password:string;

  unUsuario:Usuario;

  EmailR:string;
  UsernameR:string;
  PasswordConfirmR:string;
  PasswordR:string;
  NombreR:string;
  constructor(private PersonaS:PersonaService,private route: ActivatedRoute,
    private router: Router) { 
      this.tipoUsuario="Administración";
      debugger;
      this.inserta();
      this.cambia=true;
      this.unUsuario= new Usuario();


  }

  ngOnInit() {
  }


  login()
  {
if(this.username==null || this.password==null)
  {
    alert("Debe completar Email y Clave");
  }
  else
    {
  var respuesta=  this.PersonaS.GenerarToken(this.username,this.password, token => { 
    if(token!=undefined)
      {
        sessionStorage.clear();
        sessionStorage.setItem("token",token);
        localStorage.setItem("cliente",this.username);
        this.router.navigate(['/Principal']);
      }
  });
} 
}

inserta()
{
  this.username="";
  this.password="";
switch(this.tipoUsuario)
{
  case 'Empleado':
  this.username="unEmpleado@Palace.com";
  this.password="Palace123";
  break;
  case 'Encargado':
  this.username="unEncargado@Palace.com";
  this.password="Palace123";
  break;
  case 'Administración':
  this.username="unAdministrador@Palace.com";
  this.password="Palace123";
  break;
  case 'Cliente':
  this.username="unCliente@Cliente.com";
  this.password="Palace123";
  break;
}

}



cambiar()
{
  if(this.cambia)
    {
      this.cambia=false;
    }
    else
      this.cambia=true;
}

registrar()
{
  if(this.UsernameR==null || this.PasswordR==null || this.PasswordConfirmR==null || this.NombreR==null || this.EmailR==null ||
    this.UsernameR=="" || this.PasswordR=="" || this.PasswordConfirmR=="" || this.NombreR=="" || this.EmailR=="" )
    {
      alert("Complete todos los campos");
    }
    else if(this.PasswordConfirmR != this.PasswordR)
      {
        alert("Las claves no coinciden");
        
      }
      else if (this.PasswordR.length<6)
        {
          alert("La clave debe ser de por lo menos 6 caracteres")
        }
    else
      {
        this.unUsuario.Email=this.EmailR;
        this.unUsuario.Nombre=this.NombreR;
        this.unUsuario.Clave=this.PasswordR;
        this.unUsuario.Usuario=this.UsernameR;
    var respuesta=  this.PersonaS.Registrar(this.unUsuario, mensaje => { 
      alert(mensaje);
      this.cambiar();
    });
    }
  }
}
