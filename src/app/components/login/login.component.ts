import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string

  constructor(private router: Router, private service : AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.service.login(this.email, this.password).subscribe((user) => {
      this.router.navigate(["/produtos"]);
    })
  }
}
