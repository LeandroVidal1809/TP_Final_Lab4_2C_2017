import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  NgZone,
  ViewChild, ElementRef, forwardRef
} from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ReCaptchaService } from '../../servicios/captcha.service';
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
  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
  @Input() site_key: string = "6LfSYDsUAAAAAN2D1iNCKYrHTBoiHgilxlYnDzZa";
  @Input() theme = 'light';
  @Input() type = 'image';
  @Input() size = 'normal';
  @Input() tabindex = 0;
  @Input() badge = 'bottomright';
  /* Available languages: https://developers.google.com/recaptcha/docs/language */
  @Input() language: string = 'es';

  @Output() captchaResponse = new EventEmitter<string>();
  @Output() captchaExpired = new EventEmitter();

  @ViewChild('target') targetRef: ElementRef;
  widgetId: any = null;

  onChange: Function = () => {};
  onTouched: Function = () => {};
  constructor(private PersonaS:PersonaService,private route: ActivatedRoute,
    private router: Router , private _zone: NgZone,
    private _captchaService: ReCaptchaService) { 
      this.tipoUsuario="Administración";
      debugger;
      this.inserta();
      this.cambia=true;
      this.unUsuario= new Usuario();


  }

  ngOnInit() {
    this._captchaService.getReady(this.language)
    .subscribe((ready) => {
        if (!ready)
            return;
        // noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
        this.widgetId = (<any>window).grecaptcha.render(this.targetRef.nativeElement, {
            'sitekey': this.site_key,
            'badge': this.badge,
            'theme': this.theme,
            'type': this.type,
            'size': this.size,
            'tabindex': this.tabindex,
            'callback': <any>((response: any) => this._zone.run(this.recaptchaCallback.bind(this, response))),
            'expired-callback': <any>(() => this._zone.run(this.recaptchaExpiredCallback.bind(this)))
        });
    });
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

checkCaptcha(response:any)
{
  alert("asd");
  alert(response);
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
  public reset() {
    if (this.widgetId === null)
        return;
    // noinspection TypeScriptUnresolvedVariable
    (<any>window).grecaptcha.reset(this.widgetId);
    this.onChange(null);
}

// noinspection JSUnusedGlobalSymbols
public execute() {
    if (this.widgetId === null)
        return;
    // noinspection TypeScriptUnresolvedVariable
    (<any>window).grecaptcha.execute(this.widgetId);
}

public getResponse(): string {
    if (this.widgetId === null)
        return null;
    // noinspection TypeScriptUnresolvedVariable
    return (<any>window).grecaptcha.getResponse(this.widgetId);
}

writeValue(newValue: any): void {
    /* ignore it */
}

registerOnChange(fn: any): void {
    this.onChange = fn;
}

registerOnTouched(fn: any): void {
    this.onTouched = fn;
}

private recaptchaCallback(response: string) {
    this.onChange(response);
    this.onTouched();
    this.captchaResponse.emit(response);
}

private recaptchaExpiredCallback() {
    this.onChange(null);
    this.onTouched();
    this.captchaExpired.emit();
}
}
