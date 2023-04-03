function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  
    
  accounts.sort(function(a, b) {
    var nameA = a.name.last.toUpperCase(); 
    var nameB = b.name.last.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  
  const accountId = account.id;
  let totalBorrows = 0;
  
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if (borrow.id === accountId) {
        totalBorrows++;
      }
    });
  });
  return totalBorrows;
}


/*
1. It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. 
2. Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.
*/

function getBooksPossessedByAccount(account, books, authors) {
  
  const results = [];
  
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if (!borrow.returned && borrow.id == account.id) {
        book.author = authors.find((author) => author.id == book.authorId);
          results.push(book)      
     }
   });
 });
  return results
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
