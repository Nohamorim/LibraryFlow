import { Component, OnInit } from '@angular/core';
import { AuthorsModule } from '../../authors/authors.module';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors: AuthorsModule[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.authorService.getAll().subscribe((AuthorsModule: AuthorsModule[]) => {
      this.authors = AuthorsModule;
    });
  }
}
