import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule], // CommonModule for ngIf/ngFor, RouterModule for routerLink
  template: `
    <nav class="sidebar">
      <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link" routerLink="/books" routerLinkActive="active">Books</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/authors" routerLinkActive="active">Authors</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/users" routerLinkActive="active">Users</a></li>
      </ul>
    </nav>
  `,
  styleUrl: './sidebar.component.scss' // You might want to create this file for styling
})
export class SidebarComponent {
}
