import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PersonaService } from  '../../servicios/persona.service';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  unarray:any;
  salon:string;
  fecha:string;
  mesa:string;
  ok:boolean;
  arrayfechas : Array<any>;
  constructor(private PersonaS:PersonaService,private route: ActivatedRoute,
    private router: Router) {

      if(sessionStorage.getItem("token")==undefined)
        {
          this.router.navigate(['/Login']);
        }
    this.unarray = new Array<any>();
    this.arrayfechas = new Array<any>();
    this.TraerReservas();
        this.ok=false;
   }
   TraerReservas()
   {
    var respuesta=  this.PersonaS.TraerReservas( data => { 
          data.forEach(element => {
         this.arrayfechas.push(element);
      });
    });
   }

   CargaLista()
   {
     this.unarray = new Array<any>();
    this.ok=false;
    if(this.fecha!="")
      {
        let fecha1 = this.fecha.split('-');
        var respuesta=  this.PersonaS.TraerLista(fecha1[0],fecha1[1], data => { 
          data.forEach(element => {
         
        this.unarray.push({
          "Nombre":element['invitado'],
          "Mesa":element['mesa']}
        );
        this.ok=true;
          });
          if(this.ok==false)
            {
            alert("No hay invitados cargados para esa fecha");
            return; 
            }
        });


      }
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
cerrar()
{
sessionStorage.clear();
this.router.navigate(['']);
}

download(){
  var csvData = this.ConvertToCSV(this.unarray);
  var a = document.createElement("a");
  a.setAttribute('style', 'display:none;');
  document.body.appendChild(a);
  var blob = new Blob([csvData], { type: 'text/csv' });
  var url= window.URL.createObjectURL(blob);
  a.href = url;
  let fecha1 = this.fecha.split('-');

  a.download =  fecha1[0]+"-"+fecha1[1]+".csv";
  a.click();
}

ConvertToCSV(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = '';
  var row = "";

  for (var index in objArray[0]) {
      //Now convert each value to string and comma-separated
      row += index + ';';
  }
  row = row.slice(0, -1);
  //append Label row with line break
  str += row + '\r\n';

  for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
          if (line != '') line += ';'

          line += array[i][index];
      }
      str += line + '\r\n';
  }
  return str;
}
excel()
{

}
}
