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

function addBook(bookList, title, author, pages = 0, isRead = false) {
  let book = new Book(title, author, pages, isRead);
  bookList.push(book);
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
}

function handleAddBookDialogClose() {
  let dialog = document.querySelector('#add-book-dialog');
  dialog.classList.remove('visible');
}
