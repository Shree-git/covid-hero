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
    this.themeToggle = JSON.parse(localStorage.getItem('dark'))
  }

  ngOnInit() {
  
  }

  toggle(event){

    console.log('change', this.themeToggle)


    this.darkService.toggleDarkTheme(this.themeToggle)

  }
}
