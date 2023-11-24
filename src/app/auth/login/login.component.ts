import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginRequest } from '../../interfaces/login.interfaces';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  public loginForm= this.fb.group({
    user:['', Validators.required],
    password:['', Validators.required],
  })
  constructor(
    private loginService: LoginService,
    private fb:FormBuilder,
    private router: Router,
     ){
  }



  get user(){
    return this.loginForm.controls.user
  }
  get password(){
    return this.loginForm.controls.password
  }
  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as loginRequest)
      .subscribe(

        data =>{

          this.loginForm.markAllAsTouched();

          let usuarios = Object.values(data);

          let ingress = usuarios.find(user =>
            user.user === this.loginForm.value.user)

          if (ingress) {
            if (ingress.password === this.loginForm.value.password) {
              this.router.navigate(['/home']);
            } else {
              alert(`Usuario inválido`);
            }
          } else {
            alert(`Usuario inválido`);
          }
          }
        );
      }




    }
  }












        // data => {
        //   this.loginForm.markAllAsTouched();

        //   for (let i = 0; i < Object.values(data).length; i++) {
        //     const usuario = Object.values(data)[i];
        //     if(usuario.user === this.loginForm.value.user){
        //       usuario.password === this.loginForm.value.password
        //         this.router.navigate(['/home']);
        //     }

        //   };

        // },

        // alert('Usuario inválido')


