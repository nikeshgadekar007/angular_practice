import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.types';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);

  getTodosFromApi() {
    const URL = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<Todo>>(URL);
  }
}
