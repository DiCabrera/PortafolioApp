import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  passShow: boolean = false;
  passType:string = "password"

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    
  ) {

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required, ],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    })

   }

   register() {
    if(this.registerForm.valid) {
      const { username, email, password, password2 } = this.registerForm.value;
      const newUser : User = { username, email, password, password2 };
      this.authService.register(newUser).subscribe(
        response => {

          console.log(newUser) 
          this.router.navigate(['/login']);
        })  

    }
  }


   verPass(){
    if(this.passShow){
      this.passShow = false;
      this.passType = "password";
    }
    else {
      this.passShow = true;
      this.passType = "string"
    }
  }

  ngOnInit() {
  }

}
