import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksQuery: QueryRef<any>;

  constructor(private apollo: Apollo) {
    this.booksQuery = this.apollo
      .watchQuery({
        query: gql`
          {
            books {
              nodes {
                id
                title
                author
                publishDate
              }
            }
          }
        `,
      });
  }

  public refresh() {
    this.booksQuery.refetch();
  }

  public getAllBooks() {
    return this.booksQuery
      .valueChanges
      .pipe(map((res: any) => res.data.books.nodes as Array<any>));
  }
}
