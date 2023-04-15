import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/courses");
  }

  createCourse(course: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/courses", course);
  }

  updateCourse(course: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + "/courses/" + course.id, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + "/courses/" + id);
  }
}
