import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  private books$;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.bookService.getAllBooks();
  }

}
