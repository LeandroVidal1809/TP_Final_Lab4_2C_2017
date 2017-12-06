import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PersonaService } from  '../../servicios/persona.service';
@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
Pre1:string;
Pre2:string;
Pre3:string;
Pre4:string;
Pre5:string;
Pre6:string;
Pre7:string;
Pre8:string;
arraymesa : Array<any>;


  constructor(private PersonaS:PersonaService,private route: ActivatedRoute,
    private router: Router) { 
      if(sessionStorage.getItem("token")==undefined)
        {
          this.router.navigate(['/Login']);
        }
        this.arraymesa =  new Array<any>();
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
 ngOnInit() {
 }

 algo()
 {
   debugger;
  this.cargaArray();
  var respuesta=  this.PersonaS.CargaEncuesta(this.arraymesa, mensaje => { 
    if(mensaje!=undefined)
      {
          
        alert(mensaje);
      }
      alert("Mesa Agregada exitosamente");
    }
 }

 cargaArray()
 {
  this.arraymesa.push(this.Pre2);
  this.arraymesa.push(this.Pre4);
  this.arraymesa.push(this.Pre5);
  this.arraymesa.push(this.Pre6);
  this.arraymesa.push(this.Pre7);


 }
cerrar()
{
sessionStorage.clear();
this.router.navigate(['']);
}


}
