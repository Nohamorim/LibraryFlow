import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgxPaginationModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchTerm: string = '';
  page: number = 1;
  itemsPerPage: number = 5;

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

  deleteBook(id: number): void {
    console.log(`Delete book with id: ${id}`);
  }
}
