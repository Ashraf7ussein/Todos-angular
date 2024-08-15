import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../components/todo-list/todo-list.component';

@Pipe({
  name: 'sortTodos',
  standalone: true // Make the pipe standalone
})
export class SortTodosPipe implements PipeTransform {
  transform(todos: Todo[], sortBy: keyof Todo, order: 'asc' | 'desc' = 'asc'): Todo[] {
    if (!todos || todos.length === 0) return [];
    
    return todos.sort((a, b) => {
      const compareA = a[sortBy].toString().toLowerCase();
      const compareB = b[sortBy].toString().toLowerCase();

      if (order === 'asc') {
        return compareA < compareB ? -1 : compareA > compareB ? 1 : 0;
      } else {
        return compareA > compareB ? -1 : compareA < compareB ? 1 : 0;
      }
    });
  }
}
