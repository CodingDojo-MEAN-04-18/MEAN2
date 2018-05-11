import { Component } from '@angular/core';

import { Book } from './book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  book: Book = new Book();
  books: Book[] = [];

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    this.books.push(this.book);

    console.log('books', this.books);

    this.book = new Book();
    form.reset();
  }
}
