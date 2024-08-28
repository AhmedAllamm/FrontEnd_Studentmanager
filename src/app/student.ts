import { Component } from "@angular/core";
import { Faculty } from "./Faculty";

export class Student {
    id! : Number;
    name!: string;
    faculty: Faculty=new Faculty();
    studentLevel!: string;
}
// @Component({
//     selector: 'app-root',
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css']
//   })
//   export class AppComponent {
//     newStudent: Student = { id: 0, name: '', faculty: '', level: '' };
//     editStudent: Student = { id: 0, name: '', faculty: '', level: '' };
//     deleteStudent: Student | null = null;
  
//     onAddStudent(student: Student) {

//     }
  
    
  // }