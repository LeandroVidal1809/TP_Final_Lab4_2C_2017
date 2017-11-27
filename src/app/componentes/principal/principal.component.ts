import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PersonaService } from  '../../servicios/persona.service';
import {BotonComponent} from '../boton/boton.component';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  unarray:any;
  settings = {
    columns: {
      Nombre: {
        title: 'Nombre'
      },
      Apellido: {
        title: 'Apellido'
      },
      Sexo: {
        title: 'Sexo'
      },
      Direccion: {
        title: 'Direccion'
      },
      Coordenada: {
        title: 'Coordenada'
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: BotonComponent,
        onComponentInitFunction(instance) 
        {
          instance.save.subscribe(row => {
            alert(`${row.Nombre} saved!`)
          });
        }
      }
    }
  };

  constructor(private PersonaS:PersonaService) {
  
    this.unarray = new Array<any>();
    this.TraerDatos();
   }

 


  ngOnInit() {
  }

  
  TraerDatos()
  {
    this.PersonaS.TraerDatos()
    .then(lista=>{this.unarray=lista;
      this.unarray.forEach(element => {
        console.log(element);
      });  
    })
    .catch(e=>{alert("Fallo")});

  
  }
}
