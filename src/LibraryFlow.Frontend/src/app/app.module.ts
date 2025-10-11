// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF

 } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'authors', loadChildren: () => import('./authors/authors/authors.module').then(m => m.AuthorsModule) }, { path: 'users', loadChildren: () => import('./users/users/users.module').then(m => m.UsersModule) }]) // você pode adicionar rotas depois
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
