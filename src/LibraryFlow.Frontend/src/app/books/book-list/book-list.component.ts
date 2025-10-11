// book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchTerm: string = '';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
      this.filteredBooks = books;
    });
  }

  filterBooks(): void {
    if (!this.searchTerm) {
      this.filteredBooks = this.books;
      return;
    }

    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.authorName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.isbn.includes(this.searchTerm)
    );
  }
}
