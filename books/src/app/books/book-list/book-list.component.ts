import { Component, OnInit } from '@angular/core';

import { BOOKS } from '../../data/book-data';
import { Book } from '../../book';

import { TitleizePipe } from '../../titleize.pipe';
import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book;
  errorMessage: string;

  constructor(
    private titlize: TitleizePipe,
    private readonly bookService: BookService
  ) {}

  ngOnInit() {
    console.log('inside ng on init');

    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.books.forEach(book => {
        book.author = this.titlize.transform(book.author);
      });
    });
  }

  onSelect(book: Book) {
    console.log('selecting something', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  addBook(book: Book) {
    console.log('adding book', book);
    this.books.push(book);
  }

  onBubble(event: Event) {
    event.stopPropagation();
  }

  onDelete(book: Book) {
    console.log('removing book', book);
    this.bookService.removeBook(book.id).subscribe(
      removedBook => {
        this.books = this.books.filter(b => b.id !== book.id);
      },
      error => {
        this.errorMessage = 'There was an error removing the book';

        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    );
  }
}
