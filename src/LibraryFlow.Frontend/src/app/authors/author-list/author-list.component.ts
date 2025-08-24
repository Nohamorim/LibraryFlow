import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/author.model'; // Verifique o caminho
import { AuthorService } from '../../services/author.service'; // Verifique o caminho

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.authorService.getAll().subscribe(authors => {
      this.authors = authors;
    });
  }
}
