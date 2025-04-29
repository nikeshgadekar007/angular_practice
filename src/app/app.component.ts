import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyDirectivesComponent } from './components/my-directives/my-directives.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AddEmployeeComponent,
    EmployeeListComponent,
    DataBindingComponent,
    MyDirectivesComponent,
    FormsModule,
    NgbModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
