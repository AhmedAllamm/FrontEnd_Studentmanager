// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FacultyService } from './faculty.service ';
import { Faculty } from './Faculty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public students!: Student[];
  public faculties: Faculty[]=new Array(); 
  public editStudent: Student = new Student();
  public deleteStudent: Student = new Student();
  student  :Student = new Student();
  temp!:string;
  constructor(private studentService: StudentService, private facultyService: FacultyService) {}

  public getfaculties(): void {
    this.facultyService.getfaculties().subscribe(
      (response: Faculty[]) => {
        this.faculties = response;
        console.log(this.faculties);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  onFacultyChange(event: any) {
    console.log('Selected faculty object:', event.value);
    console.log('Current selectedFaculty:', this.student.faculty);
  }

  ngOnInit() {
    this.getStudents();
    this.getfaculties();
  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
        console.log(this.students);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddStudent(student : Student): void {
    // document.getElementById('add-student-form').click();
    console.log("student == ",  student  )
    this.studentService.addStudent(student).subscribe(
      (response: Student) => {
        console.log("response == ",response);
        this.getStudents();
        // addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        // addForm.reset();
      }
    );
  }

  public onUpdateStudent( editStudent: Student): void {
    this.studentService.updateStudent(editStudent).subscribe(
      (response: Student) => {
        console.log(response);
        this.getStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteStudent(studentId: Number): void {
    this.studentService.deleteStudent(studentId).subscribe(
      (response: void) => {
        console.log(response);
        this.getStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchStudents(key: string): void {
    console.log(key);
    const results: Student[] = [];
    for (const student of this.students) {
      if (student.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || student.faculty.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || student.studentLevel.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(student);
      }
    }
    this.students = results;
    if (results.length === 0 || !key) {
      this.getStudents();
    }
  }

  public onOpenModal(student: Student, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addStudentModal');
    }
    if (mode === 'edit') {
      this.editStudent = student;
      button.setAttribute('data-target', '#updateStudentModal');
    }
    if (mode === 'delete') {
      this.deleteStudent = student;
      button.setAttribute('data-target', '#deleteStudentModal');
    }

    container?.appendChild(button);
    button.click();
  }
}
