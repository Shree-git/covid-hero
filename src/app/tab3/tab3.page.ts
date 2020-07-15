import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation} from '@capacitor/core';

/// <reference types="@types/googlemaps" />
declare var google: any
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  @ViewChild('map', {read: ElementRef, static: false}) mapElement;
  map: any;
  infoWindows: any = [];
  markers: any;
  latitude: number;
  longitude: number;
  constructor() {

  }

  ionViewDidEnter(){
    this.initMap();
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }

  async initMap(){
    // this.getLocation();
   
    let coords = new google.maps
    .LatLng(await (await Geolocation.getCurrentPosition()).coords.latitude,await (await Geolocation.getCurrentPosition()).coords.longitude)
    let mapOptions = {
      center: coords,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    let mapMarker = new google.maps.Marker({
      position: coords,
    })

    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    mapMarker.setMap(this.map)
  }
  
}
