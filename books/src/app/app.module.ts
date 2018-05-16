import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookNewComponent } from './books/book-new/book-new.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookListComponent } from './books/book-list/book-list.component';

@NgModule({
  declarations: [AppComponent, BookNewComponent, BookDetailsComponent, BookListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
