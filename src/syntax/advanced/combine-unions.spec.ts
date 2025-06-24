import { describe, it } from 'vitest';
import { assertNever } from '../../shared/utils/assert-never';

describe('The last abstract syntax I show I promise!', () => {
  it('combining unions', () => {
    type Book = {
      id: string;
      title: string;
      author: string;
      country: string;
      yearReleased: number;
    };

    type SortKeys = keyof Omit<Book, 'id'>;
    type SortDirections = 'ascending' | 'descending';

    type SortOptions = `${SortKeys}-${SortDirections}`;

    function sortBooksBy(books: Book[], options: SortOptions) {
      switch (options) {
        case 'author-ascending':
          // do the sort
          break;
        case 'author-descending':
          break;
        case 'title-ascending':
        case 'title-descending':
        case 'yearReleased-ascending':
        case 'yearReleased-descending':
          break;
        case 'country-ascending':
        case 'country-descending':
          break;
        default:
          assertNever(options);
      }
    }

    const books: Book[] = [
      {
        id: '1',
        title: 'Book1',
        author: 'Smith',
        country: 'USA',
        yearReleased: 1942,
      },
      {
        id: '2',
        title: 'Another Book',
        author: 'Young',
        country: 'Spain',
        yearReleased: 1913,
      },
    ];

    sortBooksBy(books, 'country-ascending');
  });
});
