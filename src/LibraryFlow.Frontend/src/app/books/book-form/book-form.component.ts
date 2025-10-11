import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      isbn: ['', [Validators.required, Validators.pattern(/^\d{10,13}$/)]],
      authorId: ['', Validators.required],
      publicationYear: ['', [Validators.required, Validators.min(1000), Validators.max(new Date().getFullYear())]],
      price: ['', [Validators.required, Validators.min(0)]],
      stockQuantity: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}
}
