import Book  from "./book.js";


class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

   get format() {
    return this._format;
  }
  set format(value) {
    if (typeof value !== "string" ) {
      throw new Error("Формат файлу має бути строкою.");
    }
    this._format = value;
  }

  printInfo() {
    console.log(
      `Книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.format}`
    );
  }
 
  static fromBook(book, format) {
    if (!(book instanceof Book)) {
      throw new Error("Необхідно передати об'єкт класу Book.");
    }
    return new EBook(book.title, book.author, book.year, format);
  }
}

export default EBook;