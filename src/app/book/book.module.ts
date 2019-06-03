import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  providers: [BookService],
})
export class BookModule { }
