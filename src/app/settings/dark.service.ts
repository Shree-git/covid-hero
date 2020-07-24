import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkService {

  constructor() {
    
    // document.body.classList.toggle('dark', false);
   }

  // Add or remove the "dark" class based on if the media query matches
toggleDarkTheme(themeToggle) {
  document.body.classList.toggle('dark', themeToggle);
  localStorage.setItem('dark', themeToggle)
  // JSON.parse(localStorage.getItem('dark'))
 
}
}
