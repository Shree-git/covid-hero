import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account.model';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { Network } from '@ionic-native/network/ngx';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
// import { MessagingService } from '../services/messaging.service';

const { Network } = Plugins;



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  pages: any
  user: any
  photoURL: string
  account: Account
    networkStatus: NetworkStatus;
     networkListener: PluginListenerHandle;
  backButtonSubscription;
  constructor(
    public authService: AuthenticationService,
    public accountService: AccountService,
    private platform: Platform,
    private router: Router,
    private alertCtrl: AlertController, 

  ) {

   }

 





  async ngOnInit(){
    this.getAccount()
    this.sideMenu()
    this.getPhoto()
    this.networkListener = Network.addListener('networkStatusChange', async (status) => {
      console.log("Network status changed", status);
      this.networkStatus = status;
      let alert: HTMLIonAlertElement;
      if(!this.networkStatus.connected){
        alert = await this.alertCtrl.create({
          header: 'No Internet Connection',
          message: 'Connect to the internet to use the application.',
          cssClass: 'buttonCss',
          backdropDismiss: false,
         
        })
        await alert.present()
        
        
      }else{
    
        alert.dismiss();
      }
    });

    this.networkStatus = await Network.getStatus();
  
  }

  

  ionViewWillEnter(){
    this.getAccount()
    this.sideMenu()
    this.getPhoto()
  }

 
  ionViewDidEnter(){ this.backButtonSubscription = this.platform.backButton.subscribe(()=>{ 
    if ((this.router.isActive('/tabs/tab1', true) && this.router.url === '/tabs/tab1') || 
    (this.router. isActive('/tabs/tab3', true) && this.router.url === '/tabs/tab3') || 
    (this.router.isActive('/tabs/tab4', true) && this.router.url === '/tabs/tab4') ||
    (this.router.isActive('/tabs/tab2', true) && this.router.url === '/tabs/tab2')) {
      navigator['app'].exitApp();
    }
    }); } 
  
  ionViewWillLeave(){ this.backButtonSubscription.unsubscribe();}

  

  getAccount(){
    this.account = this.accountService.getAccount()
  }

  getPhoto(){
    
      this.photoURL = this.authService.getUser().photoURL
    
  }

  sideMenu(){
    this.pages = [{
      title: 'Home',
      url: '/tabs/tab1',
      icon: 'home'
    },{
      title: 'GPS Hotzone',
      url: '/tabs/tab3',
      icon: 'map'
    },{
      title: 'Restaurants and Businesses',
      url: '/tabs/tab4',
      icon: 'restaurant'
    },

  ]
  }


  logOut(){
      this.authService.logOut()
  }

  getUser(){
    if(this.user == null){
    this.user = this.authService.user
    }
  }

  getreturnUser(){
    return this.authService.getUser()
  }
}

