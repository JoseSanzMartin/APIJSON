import { Component } from "@angular/core";
import { StudentService } from "../../services/student.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  addStudent(): void {
    const newStudent = {
      id: this.students.length + 1,
      name: "New Student",
    };
    this.studentService.createStudent(newStudent).subscribe(() => {
      this.loadStudents();
    });
  }

  updateStudent(student: any): void {
    student.name = "Updated Student";
    this.studentService.updateStudent(student).subscribe(() => {
      this.loadStudents();
    });
  }

  deleteStudent(student: any): void {
    this.studentService.deleteStudent(student.id).subscribe(() => {
      this.loadStudents();
    });
  }
}
