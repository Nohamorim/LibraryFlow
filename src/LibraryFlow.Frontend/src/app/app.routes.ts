import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./books/books.routes').then(m => m.routes)
  },
  {
    path: 'authors',
    loadChildren: () => import('./authors/authors.routes').then(m => m.routes)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.routes').then(m => m.routes)
  },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];
