let myLibrary = [];

document.querySelector('#add-book-btn')
  .addEventListener('click', handleAddBookClick);
document.querySelector('#add-book-dialog-close')
  .addEventListener('click', handleAddBookDialogClose);
document.querySelector('#add-book-dialog-add')
  .addEventListener('click', handleAddBookDialogAdd);

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'read' : 'not read yet'}.`;
};

function BookRow(book) {
  let Row = document.createElement('tr');

  function parseTitleData() {
    let cellData = document.createElement('td');
    if (!book.title) {
      cellData.textContent = '';
    } else {
      cellData.textContent = book.title;
    }

    return cellData;
  }

  function parseAuthorData() {
    let cellData = document.createElement('td');
    if (!book.author) {
      cellData.textContent = 'n/a';
    } else {
      cellData.textContent = book.author;
    }

    return cellData;
  }

  function parsePagesData() {
    let cellData = document.createElement('td');
    if (book.pages <= 0 || !book.pages) {
      cellData.textContent = '-';
    } else {
      cellData.textContent = book.pages;
    }

    return cellData;
  }

  function parseReadData() {
    let cellData = document.createElement('td');
    if (book.isRead) {
      cellData.textContent = 'READ';
    } else {
      cellData.textContent = 'NOT YET READ';
    }

    return cellData;
  }

  _titleData = parseTitleData();
  _authorData = parseAuthorData();
  _pagesData = parsePagesData();
  _readData = parseReadData();

  Row.appendChild(_titleData);
  Row.appendChild(_authorData);
  Row.appendChild(_pagesData);
  Row.appendChild(_readData);

  return Row;
};

function addBook(bookList, title, author, pages = 0, isRead = false) {
  let book = new Book(title, author, pages, isRead);
  bookList.push(book);
}

function updateDisplay(display, books) {
  let newDisplay = [];

  for (let book of books) {
    let row = new BookRow(book);
    newDisplay.push(row);
  }

  display.replaceChildren(...newDisplay);
}

function handleAddBookClick() {
  let dialog = document.querySelector('#add-book-dialog');
  dialog.classList.add('visible');
}

function handleAddBookDialogAdd() {
  let dialog = document.querySelector('#add-book-dialog');
  let title = document.querySelector('#add-book-dialog-title').value;
  let author = document.querySelector('#add-book-dialog-author').value;
  let pages = document.querySelector('#add-book-dialog-pages').value;
  let status = document.querySelector('#add-book-dialog-status').checked;

  addBook(myLibrary, title, author, pages, status);
  updateDisplay(
    document.querySelector('#book-list > tbody'),
    myLibrary
  );
}

function handleAddBookDialogClose() {
  let dialog = document.querySelector('#add-book-dialog');
  dialog.classList.remove('visible');
}
