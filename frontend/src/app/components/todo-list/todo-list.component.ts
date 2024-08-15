import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { SortTodosPipe } from '../../pipes/sort-todos.pipe';

export interface SubTask {
  title: string;
  completed: boolean;
  status: 'todo' | 'doing' | 'done';
}

export interface Todo {
  title: string;
  completed: boolean;
  status: 'todo' | 'doing' | 'done';
  description: string;
  subtasks: SubTask[];
  _id: string;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoCardComponent, SortTodosPipe],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  columns: { title: string; todos: Todo[] }[] = [
    { title: 'Todo', todos: [] },
    { title: 'Doing', todos: [] },
    { title: 'Done', todos: [] }
  ];

  sortType: 'asc' | 'desc' = 'asc'; // Track sort order
  sortBy: keyof Todo = 'title'; // Track sort field

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.columns.forEach(column => {
        column.todos = todos.filter(todo => todo.status === column.title.toLowerCase());
      });
    });
  }

  sortAscending(): void {
    this.sortType = 'asc';
  }

  sortDescending(): void {
    this.sortType = 'desc';
  }

  onDelete(todoId: string): void {
    this.columns.forEach(column => {
      column.todos = column.todos.filter(todo => todo._id !== todoId);
    });
  }

  addColumn(): void {
    const newColumnTitle = `Column ${this.columns.length + 1}`;
    this.columns.push({ title: newColumnTitle, todos: [] });
  }
}
