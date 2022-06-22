import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { User } from '../models/user.model';
import { Location } from '@angular/common';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(private router: Router, private http: HttpClient, private location: Location) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  public isAuthenticated(): boolean{
    return this.logedUser.profile.code > 0;
  }

  logedUser : User = new User();

  private baseUrl = 'http://localhost:3009';
  // json server

  registrar(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/register`, user);
  }

  public isAdmin(): boolean {
    const papel = this.logedUser.profile.role;
    return this.isAuthenticated() && papel === "admin";
  }

  public userName(): string {
    return this.logedUser.name
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/login`, { email: email, password: password }).pipe(tap((user) => {
      this.logedUser = user
    }))
  }

  logout(){
    try {
      this.logedUser = new User();
      this.location.go('/home')
    } catch (err) {
      console.error(err);
    }
  }
}
