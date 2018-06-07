import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Book } from '../../book';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  book: Book = new Book();

  @Output() newBook = new EventEmitter<Book>();

  constructor(
    private readonly bookService: BookService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    this.bookService.createBook(this.book).subscribe(
      book => {
        // this.newBook.emit(book);

        // this.book = new Book();
        // form.reset();

        this.router.navigateByUrl('books');
      },
      error => {
        console.log('error creating book', error);
      }
    );
  }
}
