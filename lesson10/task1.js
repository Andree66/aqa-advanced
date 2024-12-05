import Book from './book.js';
import EBook from './EBook.js';


const book1 = new Book("Діти", "Антуан", 1948);
const book2 = new Book("Мир", "Соловей М.", 1877);
const book3 = new Book("1984", "Джордж Клуні", 1995);

book1.printInfo();
book2.printInfo();
book3.printInfo();


const eBook = new EBook("Гра перестолів", "Джон Сноу", 2015, "PDF");
eBook.printInfo();


const eBookFromBook = EBook.fromBook(book1, "EPUB");
eBookFromBook.printInfo();

const books = [book1, book2, book3, eBook, eBookFromBook];
const oldestBook = Book.findOldestBook(books);

console.log("Найдавніша книга:");
oldestBook.printInfo();