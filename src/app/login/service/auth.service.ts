import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      const userData = !!localStorage.getItem('userData');
      resolve(userData || this.loggedIn)
    })
  }

  login(data: { username?: string, password?: string }): boolean {
    if (data.username === 'weather' && data.password == '123') {
      localStorage.setItem('userData', JSON.stringify(data));
      this.loggedIn = true;
      return true
    }
    return false;
  }

  logOut(): void{
    localStorage.removeItem('userData');
  }
}
