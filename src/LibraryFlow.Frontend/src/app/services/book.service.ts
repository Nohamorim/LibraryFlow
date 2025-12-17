import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Book } from '../models/book.model';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = `${environment.apiUrl}/books`;

  constructor(
  private http: HttpClient,
  private toastr: ToastrService
) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl).pipe(
      catchError(error => {
        this.toastr.error('Erro ao carregar livros', 'Erro');
        return throwError(() => error);
      })
    );
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        this.toastr.error('Erro ao carregar livro', 'Erro');
        return throwError(() => error);
      })
    );
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book).pipe(
      tap(() => this.toastr.success('Livro criado com sucesso', 'Sucesso')),
      catchError(error => {
        this.toastr.error('Erro ao criar livro', 'Erro');
        return throwError(() => error);
      })
    );
  }

  update(id: number, book: Book): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, book).pipe(
      tap(() => this.toastr.success('Livro atualizado', 'Sucesso')),
      catchError(error => {
        this.toastr.error('Erro ao atualizar livro', 'Erro');
        return throwError(() => error);
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.toastr.success('Livro removido', 'Sucesso')),
      catchError(error => {
        this.toastr.error('Erro ao remover livro', 'Erro');
        return throwError(() => error);
      })
    );
  }
}
