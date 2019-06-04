import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// const createBook = gql`
//   mutation submitRepository($repoFullName: String!) {
//     submitRepository(repoFullName: $repoFullName) {
//       createdAt
//     }
//   }
// `;

const createBook = gql`
  mutation createBook($title: String, $author: String, $publishDate: Date) {
    createBook(
      input: {
        book: {
          title: $title
          author: $author
          publishDate: $publishDate
        }
      }
    ) {
      book {
        id
      }
    }
  }
`;

@Injectable()
export class CreateService {
  constructor(private apollo: Apollo) {}

  createBook(bookDetail: { title: string; author: string; publishDate: Date }) {
    return this.apollo.mutate({
      mutation: createBook,
      variables: {
        title: bookDetail.title,
        author: bookDetail.author,
        publishDate: bookDetail.publishDate,
      }
    });
  }
}
