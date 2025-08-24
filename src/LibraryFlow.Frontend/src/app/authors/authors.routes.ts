import { Routes } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorFormComponent } from './author-form/author-form.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AuthorListComponent },
      { path: 'add', component: AuthorFormComponent },
      { path: 'edit/:id', component: AuthorFormComponent }
    ]
  }
];
