import { Component } from '@angular/core';

@Component({
  selector: 'list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
})
export class ListContainerComponent {
  todos = [
    { id: 1, desc: 'Walk dog', done: false },
    { id: 2, desc: 'Buy groceries', done: false },
    { id: 3, desc: 'Wash dishes', done: false },
  ];

  todoCreationCount = 3;

  createDesc = '';

  onInputCreateDesc(event: any) {
    this.createDesc = event.target.value;
  }

  toggleDone(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
  }

  createTodo() {
    this.todoCreationCount += 1;
    this.todos.push({
      id: this.todoCreationCount,
      desc: this.createDesc,
      done: false,
    });
    this.createDesc = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
