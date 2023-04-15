import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./features/pages/login/login.component";
import { HomeComponent } from "./features/pages/home/home.component";
import { StudentsComponent } from "./features/pages/students/students.component";
import { CoursesComponent } from "./features/pages/courses/courses.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "students", component: StudentsComponent },
  { path: "courses", component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
