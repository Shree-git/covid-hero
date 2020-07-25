import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { auth } from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss'],
})
export class ChangeEmailPage implements OnInit {
  email: string;
  registerForm: FormGroup
  public validation_messages = {
 
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
   
  
  }
  constructor(private formBuilder: FormBuilder,private authService: AuthenticationService) {
    if(this.authService.isLoggedIn){
      this.email = this.authService.user.email;
    }

    this.registerForm = this.formBuilder.group({
   
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
    
    
    })
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if(this.authService.isLoggedIn){
      this.email = this.authService.user.email;
    }
  }

  updateEmail(){
    return this.authService.updateEmail(this.registerForm.get('email').value)
  }
}
