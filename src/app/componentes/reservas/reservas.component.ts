import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PersonaService } from  '../../servicios/persona.service';
import {CalendarModule} from 'primeng/primeng';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
tipo:string;
fecha:string;
value: Date;
constructor(private PersonaS:PersonaService,private route: ActivatedRoute,
    private router: Router) {
        if(sessionStorage.getItem("token")==undefined)
            {
              this.router.navigate(['/Login']);
            }
   this.tipo= localStorage.getItem("Tipo");
   }

  
   date1: Date;
   
       date2: Date;
   
       date3: Date;
       
       dates: Date[];
       
       rangeDates: Date[];
       
       minDate: Date;
       
       maxDate: Date;
       
       es: any;
       tr:any;
       
       invalidDates: Array<Date>
           
       ngOnInit() {
           this.es = {
               firstDayOfWeek: 1,
               dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
               dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
               dayNamesMin: [ "D","L","M","X","J","V","S" ],
               monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
               monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
               today: 'Hoy',
               clear: 'Borrar'
           }
           
           this.tr = {
               firstDayOfWeek : 1
           }
           
           let today = new Date();
           let month = today.getMonth();
           let year = today.getFullYear();
           let prevMonth = (month === 0) ? 11 : month -1;
           let prevYear = (prevMonth === 11) ? year - 1 : year;
           let nextMonth = (month === 11) ? 0 : month + 1;
           let nextYear = (nextMonth === 0) ? year + 1 : year;
           this.minDate = new Date();
           this.minDate.setMonth(prevMonth);
           this.minDate.setFullYear(prevYear);
           this.maxDate = new Date();
           this.maxDate.setMonth(nextMonth);
           this.maxDate.setFullYear(nextYear);
           
           let invalidDate = new Date();
           invalidDate.setDate(today.getDate() - 1);
           this.invalidDates = [today,invalidDate];
       }
cerrar()
{
sessionStorage.clear();
this.router.navigate(['']);
}
 Reserva()
 {
   //consulta
     var fec = this.date2.getDate()+"/"+this.date2.getMonth()+"/"+this.date2.getFullYear();
   var respuesta=  this.PersonaS.Reservar(fec, mensaje => { 
    if(mensaje!=undefined)
      {
          
        alert(mensaje);
      }
  });
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
   }
 }
}
