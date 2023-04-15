import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
  public signUpForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [""],
      password: [""],
    });
  }
  signUp(): void {
    this.http
      .post<any>("http://localhost:3000/signupUsersList", this.signUpForm.value)
      .pipe(
        tap(
          (res) => {
            alert("SIGNIN SUCCESFUL");
            this.signUpForm.reset();
            this.router.navigate(["login"]);
          },
          (err) => {
            alert("Something went wrong");
          }
        )
      )
      .subscribe();
  }
}
