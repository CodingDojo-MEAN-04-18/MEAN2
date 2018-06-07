import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';

import { Book } from '../book';

@Injectable()
export class BookService {
  // private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  private base = '/api/books';

  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.base}/${book.id}`, book);
  }

  removeBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${id}`);
  }
}
