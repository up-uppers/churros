import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private router: Router, private service : AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    let user :  User = {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }

    this.service.registrar(user).subscribe((user) => {
      console.log(user)
      this.router.navigate(["/produtos"]);
    })
    console.log('register')
  }
}
