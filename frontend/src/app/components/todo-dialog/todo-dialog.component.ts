// todo-dialog.component.ts
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo, SubTask } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css'],
})
export class TodoDialogComponent {
  subtasks: SubTask[] = [];
  isVisible: boolean = true;
  title: string = '';
  description: string = '';
  status: Todo['status'] = 'todo'; 
  completed: boolean = false; 

  constructor(private todoService: TodoService) {}

  addSubtask() {
    this.subtasks.push({ title: '', completed: false, status: 'todo' });
  }

  closeDialog() {
    this.isVisible = false;
  }

  addTodo() {
    if (this.title.trim() === '') {
      alert('Title is required!');
      return;
    }

    const newTodo: Omit<Todo, '_id'> = { 
      title: this.title,
      description: this.description,
      subtasks: this.subtasks,
      status: this.status,
      completed: this.completed
    };

    this.todoService.createTodo(newTodo).subscribe(
      response => {
        console.log('Task created successfully:', response);
        this.title = '';
        this.description = '';
        this.subtasks = [];
        this.status = 'todo';
        this.completed = false;
        this.closeDialog();
      },
      error => {
        console.error('Error creating task:', error);
      }
    );
  }
}
