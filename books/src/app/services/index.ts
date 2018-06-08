import { AuthService } from './auth.service';
import { BookService } from './book.service';

export const services: any[] = [AuthService, BookService];

export * from './auth.service';
export * from './book.service';
