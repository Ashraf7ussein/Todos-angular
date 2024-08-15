import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MarketingPlanComponent } from './components/marketing-plan/marketing-plan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TodoListComponent,
    TodoDialogComponent,
    NavbarComponent,
    SideBarComponent,
    MarketingPlanComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentComponent: string = 'platformLaunch'; // Default component
  title: string = 'Platform Launch'; // Default title
  showDialog: boolean = false; // Control dialog visibility

  onComponentSelect(componentName: string): void {
    this.currentComponent = componentName;
    this.title = componentName === 'marketingPlan' ? 'Marketing Plan' : 'Platform Launch';
  }

  toggleDialog(): void {
    this.showDialog = !this.showDialog;
  }
}
