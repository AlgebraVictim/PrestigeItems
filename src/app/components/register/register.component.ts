import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {emailValidator, rePasswordValidatorFactory} from '../../validators/validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    const passwordControl = this.fb.control('', [Validators.required, Validators.minLength(6)]);
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, emailValidator]],
      password: passwordControl,
      rePassword: ['', [Validators.required, Validators.minLength(6), rePasswordValidatorFactory(passwordControl)]]
    });
  }

  ngOnInit(): void {
  }

  submitHandler(): void {
    const data = this.form.value;
    this.isLoading = true;

    this.authService.register(data).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
      }
    });
  }

}
