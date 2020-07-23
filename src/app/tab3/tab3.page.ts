import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/core';
import { title } from 'process';

/// <reference types="@types/googlemaps" />
declare var google: any
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  @ViewChild('map', { read: ElementRef, static: false }) mapElement;
  map: any;
  infoWindows: any = [];
  markers: any;
  latitude: number;
  longitude: number;
  warningMsg1: string;
  warningMsg2: string;
  mapMarker;
  boxMarion;
  boxHancock;
  boxRush;
  boxAllen;
  boxHamilton;
  boxLake;
  boxHendricks;
  boxJohnson;
  boxMorgan;
  boxShelby;
  boxBoone;
  boxMadison;
  constructor() {
    // this.warningMsg = "No COVID hotspot nearby";
  }

  ionViewDidEnter() {
    this.getLocation().then(() => {
      this.initMap();
    });
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }

  async initMap() {
    // this.getLocation();

    let coords = new google.maps
      .LatLng(this.latitude, this.longitude);


    let mapOptions = {
      center: coords,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }



    this.figureOutDistance();
    let Popup = this.createPopupClass();
    let popup = new Popup(
      new google.maps.LatLng(this.latitude, this.longitude),
      document.getElementById("con")
    );
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.mapMarker = new google.maps.Marker({
      position: coords,
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: "I am here"
    })
    //Modified : Sabrina Tarin Chowdhury
   /* this.mapMarker = new google.maps.Marker({
      position: hotspot_coords,
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: "12111 affected people in Marion County"
    })    */
    /*this.cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: this.map,
      center: hotspot_coords,
      radius: 12000
    });*/

    /*const mapMarion = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: 39.775, lng: -86.135 }
      }
    );*/
    //Author : Sabrina

    let hotspot_lat = 39.8362;
    let hotspot_lon = -86.1752;  
    let hotspot_coords = new google.maps
      .LatLng(hotspot_lat, hotspot_lon);
   /* new google.maps.Marker({
      position: hotspot_coords,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10
      },
      map: this.map,
      title: "Marion County, COVID HOTSPOT, COVID cases: 13094"
    });    
*/
    this.boxMarion = new google.maps.Rectangle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 39.92,
        south: 39.63,
        east: -85.95,
        west: -86.32
      }
    });

    this.boxHancock = new google.maps.Rectangle({
      strokeColor: "#ADFF2F",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#ADFF2F",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 39.94,
        south: 39.69,
        east: -85.60,
        west: -85.95
      }
    });

    this.boxRush = new google.maps.Rectangle({
      strokeColor: "#008000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#008000",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 39.78,
        south: 39.45,
        east: -85.30,
        west: -85.63
      }
    });

    this.boxMadison = new google.maps.Rectangle({
      strokeColor: "#008000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#008000",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 40.379,
        south: 39.947,
        east: -85.579,
        west: -85.86
      }
    });    


    this.boxMorgan = new google.maps.Rectangle({
      strokeColor: "#008000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#008000",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 39.63,
        south: 39.338,
        east: -86.25,
        west: -86.63
      }
    });    

    this.boxShelby = new google.maps.Rectangle({
      strokeColor: "#008000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#008000",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 39.698,
        south: 39.35,
        east: -85.63,
        west: -85.95
      }
    });   
    
    this.boxBoone = new google.maps.Rectangle({
      strokeColor: "#008000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#008000",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 40.177,
        south: 39.92,
        east: -86.24,
        west: -86.69
      }
    });      


    this.boxAllen = new google.maps.Rectangle({
      strokeColor: "#FFA500",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFA500",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 41.26,
        south: 40.91,
        east: -84.80,
        west: -85.33
      }
    });

    this.boxLake = new google.maps.Rectangle({
      strokeColor: "#FFA500",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFA500",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 41.61,
        south: 41.169,
        east: -87.22,
        west: -87.52
      }
    });

    this.boxHamilton = new google.maps.Rectangle({
      strokeColor: "#FFFF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 40.21,
        south: 39.92,
        east: -85.86,
        west: -86.24
      }
    });    

    this.boxHendricks = new google.maps.Rectangle({
      strokeColor: "#FFFF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 39.92,
        south: 39.63,
        east: -86.32,
        west: -86.68
      }
    });      

    this.boxJohnson = new google.maps.Rectangle({
      strokeColor: "#FFFF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
      map:this.map,
      bounds: {
        north: 39.63,
        south: 39.34,
        east: -85.95,
        west: -86.25
      }
    });      

    this.mapMarker.addListener("click", this.toggleBounce);
    //this.cityCircle.addListener("click", this.toggleBounce);
    this.boxMarion.addListener("click", this.toggleBounce);
    this.boxHancock.addListener("click", this.toggleBounce);
    this.boxRush.addListener("click", this.toggleBounce);
    this.boxAllen.addListener("click", this.toggleBounce);
    this.boxHamilton.addListener("click", this.toggleBounce);
    this.boxLake.addListener("click", this.toggleBounce);
    this.boxHendricks.addListener("click", this.toggleBounce);
    this.boxJohnson.addListener("click", this.toggleBounce);
    this.boxMorgan.addListener("click", this.toggleBounce);
    this.boxShelby.addListener("click", this.toggleBounce);
    this.boxBoone.addListener("click", this.toggleBounce);
    this.boxMadison.addListener("click", this.toggleBounce);
    
    // popup.setMap(this.map);

    // mapMarker.setMap(this.map)

  }

  toggleBounce() {
    if (this.map.getAnimation() !== null) {
      this.mapMarker.setAnimation(null);
      //this.cityCircle.setAnimation(null);
      this.boxMarion.setAnimation(null);
      this.boxHancock.setAnimation(null);
      this.boxRush.setAnimation(null);
      this.boxAllen.setAnimation(null);
      this.boxHamilton.setAnimation(null);
      this.boxLake.setAnimation(null);
      this.boxHendricks.setAnimation(null);
      this.boxJohnson.setAnimation(null);
      this.boxMorgan.setAnimation(null);
      this.boxShelby.setAnimation(null);
      this.boxBoone.setAnimation(null);
      this.boxMadison.setAnimation(null);
    } else {
      this.mapMarker.setAnimation(google.maps.Animation.BOUNCE);
      //this.cityCircle.setAnimation(google.maps.Animation.BOUNCE);
      this.boxMarion.setAnimation(google.maps.Animation.BOUNCE);
      this.boxHancock.setAnimation(google.maps.Animation.BOUNCE);
      this.boxRush.setAnimation(google.maps.Animation.BOUNCE);
      this.boxAllen.setAnimation(google.maps.Animation.BOUNCE);
      this.boxHamilton.setAnimation(google.maps.Animation.BOUNCE);
      this.boxLake.setAnimation(google.maps.Animation.BOUNCE);
      this.boxHendricks.setAnimation(google.maps.Animation.BOUNCE);
      this.boxJohnson.setAnimation(google.maps.Animation.BOUNCE);
      this.boxMorgan.setAnimation(google.maps.Animation.BOUNCE);
      this.boxShelby.setAnimation(google.maps.Animation.BOUNCE);
      this.boxBoone.setAnimation(google.maps.Animation.BOUNCE);
      this.boxMadison.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
//Modified : Sabrina Tarin Chowdhury
  async figureOutDistance() {
    let lat1 = this.latitude
    let lon1 = this.longitude
    console.log(lat1);
    console.log(lon1);
    let lat2 = 39.8362;
    let lon2 = -86.1752;
    let R = 3963;
    let dLat = Math.abs(lat2 - lat1);
    let dLon = Math.abs(lon2 - lon1);
    let ai =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    let c = 2 * Math.atan2(Math.sqrt(ai), Math.sqrt(1 - ai));
    let d = (R * c) / 55;
    console.log(d);
    if (d < 12.00) {
      this.warningMsg1 = "Danger!!! COVID Red Zone!!! Please be alert";
    }
    else {
      this.warningMsg2 = "No COVID hotspot nearby";
    }



    // MarkerOptions options = new MarkerOptions().position(a).title("I am here");
    // googleMap.animateCamera(CameraUpdateFactory.newLatLngZoom(a, 10));
    // googleMap.addMarker(options);

    // LatLng b = new LatLng(39.8362, -86.1752);
    // MarkerOptions option1 = new MarkerOptions().position(b).title("12111 affected people");
    // googleMap.animateCamera(CameraUpdateFactory.newLatLngZoom(b, 10));
    // googleMap.addMarker(option1);
  }

  createPopupClass() {

    function Popup(position, content) {
      this.position = position;

      content.classList.add("popup-bubble");

      // This zero-height div is positioned at the bottom of the bubble.
      var bubbleAnchor = document.createElement("div");
      bubbleAnchor.classList.add("popup-bubble-anchor");
      bubbleAnchor.appendChild(content);

      // This zero-height div is positioned at the bottom of the tip.
      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.appendChild(bubbleAnchor);

      // Optionally stop clicks, etc., from bubbling up to the map.
      google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
    }
    // ES5 magic to extend google.maps.OverlayView.
    Popup.prototype = Object.create(google.maps.OverlayView.prototype);

    /** Called when the popup is added to the map. */
    Popup.prototype.onAdd = function () {
      this.getPanes().floatPane.appendChild(this.containerDiv);
    };

    /** Called when the popup is removed from the map. */
    Popup.prototype.onRemove = function () {
      if (this.containerDiv.parentElement) {
        this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
    };

    /** Called each frame when the popup needs to draw itself. */
    Popup.prototype.draw = function () {
      var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);

      // Hide the popup when it is far out of view.
      var display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
          ? "block"
          : "none";

      if (display === "block") {
        this.containerDiv.style.left = divPosition.x + "px";
        this.containerDiv.style.top = divPosition.y + "px";
      }
      if (this.containerDiv.style.display !== display) {
        this.containerDiv.style.display = display;
      }
    };

    return Popup;
  }

}
