import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() title: string = 'Platform Launch';
  @Output() addTask = new EventEmitter<void>();

  onAddTask(): void {
    this.addTask.emit();
  }
}
