import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
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
    ) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl).pipe(
      catchError(error => {
        this.toastr.error('Erro ao carregar livros', 'Erro');
        return throwError(error);
      })
    );
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  create(book: Book): Observable<Book> {
  return this.http.post<Book>(this.apiUrl, book).pipe(
    tap(() => {
      this.toastr.success('Livro criado com sucesso', 'Sucesso');
    }),
      catchError(error => {
        this.toastr.error('Erro ao criar livro', 'Erro');
        return throwError(error);
      })
    );
  }

  update(id: number, book: Book): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, book);
  }

 delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
