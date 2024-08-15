import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo-list/todo-list.component';
import { NgIf } from '@angular/common';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {
  @Input() todo!: Todo;
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Todo>(); // Emit the selected todo for editing

  constructor(private todoService: TodoService) {}

  onDelete() {
    if (confirm('Are you sure you want to delete this task?')) {
      this.todoService.deleteTodo(this.todo._id).subscribe(
        () => {
          console.log('Task deleted successfully');
          this.delete.emit(this.todo._id);
        },
        error => {
          console.error('Error deleting task:', error);
        }
      );
    }
  }
  

  onCardClick() {
    this.edit.emit(this.todo); // Emit the todo data when the card is clicked
  }
}
