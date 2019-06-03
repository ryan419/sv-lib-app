import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookService } from './book.service';
import { GraphQLModule } from '../graphql.module';

@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatButtonModule,
    MatCardModule,
    GraphQLModule,
  ],
  providers: [BookService],
})
export class BookModule {}
