import { Component } from "@angular/core";
import { CourseService } from "../../services/course.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent {
  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  addCourse(newCourseName: string): void {
    if (newCourseName) {
      const newCourse = {
        id: this.courses.length + 1,
        name: newCourseName,
      };
      this.courseService.createCourse(newCourse).subscribe(() => {
        this.loadCourses();
      });
    }
  }

  updateCourse(course: any, newName: string): void {
    if (newName) {
      course.name = newName;
      this.courseService.updateCourse(course).subscribe(() => {
        this.loadCourses();
      });
    }
  }

  deleteCourse(course: any): void {
    this.courseService.deleteCourse(course.id).subscribe(() => {
      this.loadCourses();
    });
  }
}
