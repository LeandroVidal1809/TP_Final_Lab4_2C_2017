import { Component, OnInit } from '@angular/core';
import { PersonaService } from  '../../servicios/persona.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private PersonaS:PersonaService,private route: ActivatedRoute,
    private router: Router) { 

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
        this.router.navigate(['/Principal']);
      }
  });
} 
}
}
