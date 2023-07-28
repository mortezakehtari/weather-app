import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  loginForm!: FormGroup<{
    username: FormControl<string | null>,
    password: FormControl<string | null>
  }>;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl<string>('', Validators.required),
      password: new  FormControl<string>('', Validators.required),
      })
  }

  onSubmit() {
    const authorized = this.authService.login(this.loginForm.value as User);
    if (authorized)
      this.router.navigate(['/'])
    else {
      this.snackBar.open('username or password is invalid', 'dismiss', {
        duration: 30000,
      });
    }

  }


}
