import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable()
export class BookService {
  constructor(private apollo: Apollo) {}

  public getAllBooks() {
    return this.apollo
      .watchQuery({
        query: gql`
          {
            books {
              nodes {
                title
                author
                publishDate
              }
            }
          }
        `,
      })
      .valueChanges.pipe(
        map((res: any) => res.data.books.nodes as Array<any>),
      );
  }
}
