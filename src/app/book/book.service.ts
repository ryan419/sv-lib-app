import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable()
export class BookService {
  constructor(private apollo: Apollo) {}

  get books() {
    return this.apollo
      .watchQuery({
        query: gql`
          query {
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
        map((res: any) => res.data.allTodos.nodes as Array<any>),
      );
  }
}
