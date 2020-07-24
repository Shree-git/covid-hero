import { Component, OnInit } from '@angular/core';
import { DarkService } from './dark.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  themeToggle: boolean = false
  toggleValue: boolean;
  constructor(private darkService: DarkService, private acccountService: AccountService) { 
    // if(this.acccountService.account.darkTheme == null){
    //   this.acccountService.updateTheme(this.themeToggle)
    //   console.log("initial ", this.acccountService.account.darkTheme)
    // }else{
    //   this.themeToggle = this.acccountService.account.darkTheme;
    //   console.log("final ", this.acccountService.account.darkTheme)
    // }
    // document.body.classList.toggle('dark', this.themeToggle);
    this.themeToggle = JSON.parse(localStorage.getItem('dark'))
    // // this.darkService.toggleDarkTheme(this.themeToggle)
    // if (typeof localStorage.getItem('dark') == "undefined"){
    //   localStorage.setItem('dark', this.themeToggle.toString()) 
    //   console.log("initial", localStorage.getItem('dark'))
    //   document.body.classList.toggle('dark', JSON.parse(localStorage.getItem('dark')));
    // }else{
      
    //   this.themeToggle = JSON.parse(localStorage.getItem('dark'))
    //   console.log("already", localStorage.getItem('dark'))
    //   document.body.classList.toggle('dark', JSON.parse(localStorage.getItem('dark')));
    // }
  }

  ngOnInit() {
  
  }

  toggle(event){
    // console.log(event.target.value)
    // this.themeToggle = !this.themeToggle
    console.log('change', this.themeToggle)
    // this.acccountService.updateTheme(this.themeToggle);
    // localStorage.setItem('dark', this.themeToggle.toString())
    // // this.darkService.toggleDarkTheme(this.themeToggle)
    // document.body.classList.toggle('dark', this.themeToggle);

    this.darkService.toggleDarkTheme(this.themeToggle)
    
  
    // console.log(JSON.parse(localStorage.getItem('dark')))
  }
}
