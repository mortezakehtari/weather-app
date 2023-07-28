import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/service/auth.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  logout(event: boolean) {
    if (event) {
      this.authService.logOut();
      this.router.navigate(['/login'])
    }
  }
}
