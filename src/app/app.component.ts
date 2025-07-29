import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoursesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "Available courses";
  courses = [
    { id: 1, title: 'Intro to Angular', description: 'Learn the basics of Angular', price: 49, date: '2025-03-01' },
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into Angular internals', price: 99, date: '2025-04-10' },
  ];
}
