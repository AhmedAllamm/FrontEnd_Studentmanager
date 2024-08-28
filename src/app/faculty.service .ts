import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Faculty } from './Faculty';

@Injectable({providedIn: 'root'})
export class FacultyService {
  private apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient){}

  public getfaculties(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(`${this.apiServerUrl}/api/faculties`);
  }

  // public addStudent(student: Student): Observable<Student> {
  //   return this.http.post<Student>(`${this.apiServerUrl}/add` , student);
  // }

  // public updateStudent(student: Student): Observable<Student> {
  //   return this.http.put<Student>(`${this.apiServerUrl}/update/${student.id}`, student);
  // }

  // public deleteStudent(studentId: Number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}/delete/${studentId}`);
  // }
}