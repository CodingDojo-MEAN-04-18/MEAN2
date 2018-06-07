import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Book } from '../../book';
import { BookService } from '../../services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;

  errorMessage: string;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly bookService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.bookService.getBook(params.get('book_id')))
      )
      .subscribe(
        book => (this.book = book),
        (error: HttpErrorResponse) => {
          console.log('error retrieving book', error);
          this.errorMessage = error.statusText;

          setTimeout(() => {
            this.router.navigateByUrl('books');
          }, 3500);
        }
      );
  }
}
