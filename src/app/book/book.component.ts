import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  private books$;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.books$ = this.bookService.getAllBooks();
  }

  view(book) {
    this.router.navigate(['book', 'detail', book.id]);
  }
}
