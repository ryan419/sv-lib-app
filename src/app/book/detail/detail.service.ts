import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable()
export class DetailService {
  constructor(private apollo: Apollo) {}

  getDetailById(id: number) {
    return this.apollo
      .watchQuery({
        query: gql`
          {
            book(id: ${id}) {
              title
              author
              publishDate
              borrows {
                nodes {
                  member {
                    firstName
                    lastName
                    gender
                  }
                  borrowDate
                }
              }
            }
          }
        `,
      })
      .valueChanges.pipe(map(this.transformResToBookDetail));
  }

  private transformResToBookDetail(response): any {
    const { borrows, ...bookDetails } = response.data.book;
    return {
      ...bookDetails,
      borrows: borrows.nodes,
    };
  }
}
