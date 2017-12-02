import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-cargamesa',
  templateUrl: './cargamesa.component.html',
  styleUrls: ['./cargamesa.component.css']
})
export class CargamesaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { 
    if(sessionStorage.getItem("token")==undefined)
      {
        this.router.navigate(['/Login']);
      }
  }

  ngOnInit() {
  }

}
