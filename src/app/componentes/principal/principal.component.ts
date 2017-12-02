import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PersonaService } from  '../../servicios/persona.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {BotonComponent} from '../boton/boton.component';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  unarray:any;
  

  constructor(private PersonaS:PersonaService,private route: ActivatedRoute,
    private router: Router) {

      if(sessionStorage.getItem("token")==undefined)
        {
          this.router.navigate(['/Login']);
        }
    this.unarray = new Array<any>();
  
   }

 
   EnviaMsj()
   {
     alert("Su consulta fue enviada!, a la brevedad sera contactado ");
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
     }
   }
  ngOnInit() {
  }
cerrar()
{
sessionStorage.clear();
this.router.navigate(['']);
}

}
