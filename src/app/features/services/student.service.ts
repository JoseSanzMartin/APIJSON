import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students`);
  }

  createStudent(student: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/students`, student);
  }

  updateStudent(student: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/students/${student.id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/students/${id}`);
  }
}
