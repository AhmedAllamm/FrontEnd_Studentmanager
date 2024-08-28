import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { FacultyService } from './faculty.service ';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,

    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [StudentService,FacultyService,provideAnimations()],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
    
})
export class AppModule { }
 