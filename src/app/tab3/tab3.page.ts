import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/core';

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

    let hotspot_lat = 39.8362;
    let hotspot_lon = -86.1752;  
    let hotspot_coords = new google.maps
      .LatLng(hotspot_lat, hotspot_lon);
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

    this.mapMarker = new google.maps.Marker({
      position: hotspot_coords,
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: "12111 affected people"
    })    
    this.mapMarker.addListener("click", this.toggleBounce);
    
    // popup.setMap(this.map);

    // mapMarker.setMap(this.map)

  }

  toggleBounce() {
    if (this.map.getAnimation() !== null) {
      this.mapMarker.setAnimation(null);
    } else {
      this.mapMarker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

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
