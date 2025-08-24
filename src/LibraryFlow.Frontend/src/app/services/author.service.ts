import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = `${environment.apiUrl}/authors`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl);
  }

  // Implement other methods (getById, create, update, delete)
}
