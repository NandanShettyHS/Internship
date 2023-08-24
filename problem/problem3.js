function Book(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }
  
  
  const library = [];
  
  
  function addBook(title, author) {
    const newBook =new Book(title, author);
    library.push(newBook);
  }
  
  
  function borrowBook(title) {
    for (const book of library) {
      if (book.title === title && book.isAvailable) {
        book.isAvailable = false;
        console.log(`borrowed "${title}" by ${book.author}.`);
        return;
      }
    }
    console.log(`Sorry, "${title}" is not available.`);
  }
  
  function returnBook(title) {
    for (const book of library) {
      if (book.title === title && !book.isAvailable) {
        book.isAvailable = true;
        console.log(` returned "${title}" by ${book.author}.`);
        return;
      }
    }
    console.log(`"${title}" cannot be returned because it's not in the library or is already available.`);
  }
  
  function listBooks() {
    console.log(" Books in Library:");
    for (const book of library) {
      const availability = book.isAvailable ? "Available" : "Not Available";
      console.log(`Title: ${book.title}, Author: ${book.author}, Availability: ${availability}`);
    }
  }
  
  addBook("The Hobbit", "J.R.R. Tolkien");
  addBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling");
  borrowBook("The Hobbit");
  listBooks();
  returnBook("The Hobbit");
  listBooks();