import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from './book.service';
import { DeleteService } from './delete.service';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  public books$;

  constructor(
    private bookService: BookService,
    private router: Router,
    private deleteService: DeleteService,
  ) {}

  ngOnInit() {
    this.books$ = this.bookService.getAllBooks();
  }

  view(book) {
    this.router.navigate(['book', 'detail', book.id]);
  }

  delete(book) {
    this.deleteService
      .deleteBookById(book.id)
      .pipe(take(1))
      .subscribe(() => this.bookService.refresh());
  }
}
