/*

*/

function findAuthorById(authors, id) {
  return authors.find(a => a.id == id);
}

function findBookById(books, id) {
  return books.find(a => a.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  
  const checkedOutBooks = [];
  const returnedBooks = [];

  books.forEach((book) => {
    const [latestTransaction] = book.borrows;
    if (!latestTransaction.returned) {
      checkedOutBooks.push(book);
    } else {
      returnedBooks.push(book);
    }
  });

  return [checkedOutBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
   
  const borrowers = book.borrows.map((transaction) => {
  const account = accounts.find((acc) => acc.id === transaction.id);
    return { ...transaction, ...account };
  });
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
