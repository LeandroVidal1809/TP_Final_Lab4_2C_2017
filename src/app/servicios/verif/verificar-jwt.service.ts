import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router }  from '@angular/router';
import { AutJwtService } from '../verif/aut-jwt.service';
@Injectable()
export class VerificarJwtService {

  constructor(private router: Router, private auth: AutJwtService ) {
    console.log('isLogued()', auth.isLogued());
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    
          // 
            let url: string = state.url;
            console.log('url dentro de canActivate', url);
            console.log(route);
            console.log(state);
    
            if ( this.auth.isLogued() )
            {
    
              return true;
            }
            else
            {
              this.router.navigate(['/error']);
              // this.router.navigate(['/pages/forms/inputs']);
              return !true;
            }
      }
}
