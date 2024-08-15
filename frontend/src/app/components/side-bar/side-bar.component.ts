import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Output() selectComponent = new EventEmitter<string>();

  onSelectComponent(componentName: string): void {
    this.selectComponent.emit(componentName);
  }
}
