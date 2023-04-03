/*

*/

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
    
  let count = 0;
  
  for (let book of books) {
    if (!book.borrows[0].returned) {
      count++;
    }
  }
  return count;
}

function getMostCommonGenres(books) {
  
  const genreCount = books.reduce((acc, book) => {
    const genre = book.genre;
    if (!acc[genre]) {
      acc[genre] = 1;
    } else {
      acc[genre]++;
    }
    return acc;
  }, {});

  const genres = [];
  for (let genre in genreCount) {
    genres.push({ name: genre, count: genreCount[genre] });
  }

  genres.sort((genreA, genreB) => genreB.count - genreA.count);

  return genres.slice(0, 5);
}

function getMostPopularBooks(books) {
  
    const bookBorrows = books.map((book) => {
    return {
      name: book.title,
      count: book.borrows.length,
    };
  });
bookBorrows.sort((a, b) => b.count - a.count);
return bookBorrows.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  
  
  const result = [];
  authors.forEach(author => {
   
    const booksByAuthor = books.filter(book => book.authorId === author.id);

    
    const totalBorrows = booksByAuthor.reduce((acc, book) => acc + book.borrows.length, 0);

   
    result.push({ name: `${author.name.first} ${author.name.last}`, count: totalBorrows });
  });

  
  result.sort((authorA, authorB) => authorB.count - authorA.count);

  return result.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
