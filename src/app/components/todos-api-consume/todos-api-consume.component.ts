import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { catchError } from 'rxjs';
import { Todo } from '../../model/todo.types';

@Component({
  selector: 'app-todos-api-consume',
  imports: [],
  templateUrl: './todos-api-consume.component.html',
  styleUrl: './todos-api-consume.component.css',
})
export class TodosApiConsumeComponent implements OnInit {
  [x: string]: any;
  todoService = inject(TodosService);
  todosItem = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((error) => {
          console.log(error);
          throw error;
        })
      )
      .subscribe((response) => {
        this.todosItem.set(response);
        console.log('todosItem====', this.todosItem);
      });
  }
}
