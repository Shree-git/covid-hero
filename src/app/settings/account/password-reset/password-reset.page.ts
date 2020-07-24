import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  registerForm: FormGroup
  public validation_messages = {
   
    password: [
      { type: 'required', message: 'Password is required' },
      // { type: 'pattern', message: 'Please enter a valid password' },
      { type: 'minLength', message: 'Password must be over 5 characters' }
    ],
    cpassword: [
      { type: 'required', message: 'Password is required' }
    ]
  }
  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService) {
    this.registerForm = this.formBuilder.group({
     
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])],
      cpassword: ['', Validators.required]
    }, { 
      validators: this.password.bind(this)
    })
   }


   ngOnInit() {
  }

   password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('cpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  resetPassword(){
    return this.authService.updatePassword(this.registerForm.get('password').value)
  }


 

}
