import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PersonaService } from  '../../servicios/persona.service';
@Component({
  selector: 'app-cargamesa',
  templateUrl: './cargamesa.component.html',
  styleUrls: ['./cargamesa.component.css']
})
export class CargamesaComponent implements OnInit {
arrayfechas : Array<any>;
arraymesa : Array<any>;
Invitado1:string;
Invitado2:string;
Invitado3:string;
Invitado4:string;
Invitado5:string;
Invitado6:string;
Invitado7:string;
Invitado8:string;
Invitado9:string;
Invitado10:string;
salon:string;
fecha:string;
mesa:string;

  constructor(private PersonaS:PersonaService,private route: ActivatedRoute,
    private router: Router) { 
    if(sessionStorage.getItem("token")==undefined)
      {
        this.router.navigate(['/Login']);
      }
      debugger;
      this.arrayfechas =  new Array<any>();
      this.arraymesa =  new Array<any>();
      this.fecha="";
      this.mesa="";
      this.TraerReservas();
  }

  ngOnInit() {
  }

 TraerReservas()
 {
  var respuesta=  this.PersonaS.TraerReservas( data => { 
        data.forEach(element => {
       this.arrayfechas.push(element);
    });
  });
 }
  CargaMesa()
  {
    if(this.mesa!="" && this.fecha!="")
      {
    let fecha1 = this.fecha.split('-');
    this.cargaArray();
    var respuesta=  this.PersonaS.CargaMesa(fecha1[0],this.mesa,fecha1[1],this.arraymesa, mensaje => { 
      if(mensaje!=undefined)
        {
            
          alert(mensaje);
        }
        alert("Mesa Agregada exitosamente");
        this.Invitado1="";
        this.Invitado2="";
        this.Invitado3="";
        this.Invitado4="";
        this.Invitado5="";
        this.Invitado6="";
        this.Invitado7="";
        this.Invitado8="";
        this.Invitado9="";
        this.Invitado10="";
        this.fecha="";
        this.mesa="";
    });
  }
  else
    {
      alert("Debes seleccionar una fecha y una mesa que quieras cargar!");
    }
  }
  

 cargaArray()
 {
  this.arraymesa.push(this.Invitado1);
  this.arraymesa.push(this.Invitado2);
  this.arraymesa.push(this.Invitado3);
  this.arraymesa.push(this.Invitado4);
  this.arraymesa.push(this.Invitado5);
  this.arraymesa.push(this.Invitado6);
  this.arraymesa.push(this.Invitado7);
  this.arraymesa.push(this.Invitado8);
  this.arraymesa.push(this.Invitado9);
  this.arraymesa.push(this.Invitado10);
 }


 Redirect(ruta:string)
 {
   debugger;
   switch(ruta)
   {

    case 'Kind':
    this.router.navigate(['/Reservas']);
    localStorage.setItem("Tipo","Kind");
    break;
    case 'Extend':
    this.router.navigate(['/Reservas']);
    localStorage.setItem("Tipo","Extend");
    break;
    case 'Confort':
    this.router.navigate(['/Reservas']);
    localStorage.setItem("Tipo","Confort");
    break;
    case  'Cargamesa':
    this.router.navigate(['/CargarMesas']);      
    break;
    case  'Listado':
    this.router.navigate(['/Listado']);      
    break;
    case  'Home':
    this.router.navigate(['/Principal']);      
    break;
   }
 }
cerrar()
{
sessionStorage.clear();
this.router.navigate(['']);
}

}
