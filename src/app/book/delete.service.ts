import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const deleteBook = gql`
  mutation deleteBook($id: Int!) {
    deleteBook(input: { id: $id }) {
      book {
        id
        title
        author
        publishDate
      }
    }
  }
`;

@Injectable()
export class DeleteService {
  constructor(private apollo: Apollo) {}

  deleteBookById(id: number) {
    return this.apollo.mutate({
      mutation: deleteBook,
      variables: {
        id,
      }
    });
  }
}
