import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PersonaService } from  '../../servicios/persona.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps'; 
@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.component.html',
  styleUrls: ['./invitado.component.css']
})

export class InvitadoComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public longitudeConfort: number;
  public longitudeExtend: number;
  public longitudeKids: number;
  public longitudeActual: number;
  public latitudeConfort: number;
  public latitudeExtend: number;
  public latitudeKids: number;
  public latitudeActual: number;
  ok:boolean;
  public searchControl: FormControl;
  public zoom: number;
  hash:string;  
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private PersonaS:PersonaService
    
  ) {
    this.latitudeExtend= -34.618575;
    this.longitudeExtend = -58.399585;
    this.latitudeConfort= -34.600773;
    this.longitudeConfort =  -58.392719;
    this.latitudeKids = -34.598362;
    this.longitudeKids =  -58.371272;
    this.ok=false;
  }  
 
  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    
    //create search FormControl
    this.searchControl = new FormControl();
    
    //set current position
    this.setCurrentPosition();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }
  
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  compruebaHash()
  {
    var respuesta=  this.PersonaS.CompruebaHash(this.hash, data => { 
     
      if(data['fecha']==undefined)
          {
     
            this.ok=false;
          }
          else
          {
            switch(data['salon'])
            {
              case 'Extend':
              {
                this.latitudeActual=this.latitudeExtend;
                this.longitudeActual=this.longitudeExtend;
                break;
              }
              case 'Confort':
              {
                this.latitudeActual=this.latitudeConfort;
                this.longitudeActual=this.longitudeConfort;
                break;
              }
              case 'Kids':
              {
                this.latitudeActual=this.latitudeKids;
                this.longitudeActual=this.longitudeKids;
                break;
              }

            } 
            this.ok=true;
          }
  });
  }
}