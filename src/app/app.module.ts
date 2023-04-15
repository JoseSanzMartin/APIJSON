import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./features/pages/signup/signup.component";
import { LoginComponent } from "./features/pages/login/login.component";
import { HomeComponent } from "./features/pages/home/home.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { StudentsComponent } from './features/pages/students/students.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent, HomeComponent, StudentsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
