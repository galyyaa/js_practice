//Створити об'єкт Library, який має:
//Масив books [] - масив, де містяться об'єкти.
//Метод addBook - метод, який приймає параметри bookName, bookAuthor, bookYear та bookId та додає новий об'єкт із цими параметрами до масиву books
//Метод printBookInfo - метод, який приймає параметр bookId та виводить всю інформацію(ім'я, автор, рік) книжки з таким айді
//Метод printAllBooks - метод, який виводить інформацію про всі книжки в наявності(їх ім'я, авторів, роки та айді)

const library = {
    books: [],
    addBook(bookName, bookAuthor, bookYear, bookId) {
        this.books.push({ bookName, bookAuthor, bookYear, bookId })
    },
    printBookInfo(bookId) {
        console.log(`Book with id ${bookId}:`)
        console.log(this.books.filter(book => book.bookId === bookId))
    },
    printAllBooks() {
        console.log('All books:')
        console.log(this.books)
    }
}
library.addBook("1984", "George Orwell", 1949, 7)
library.addBook("Harry Potter and the Philosopher's Stone", "Joanne Rowling", 1997, 22)

console.log(library.books);
library.printBookInfo(7);
library.printAllBooks()
