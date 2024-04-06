"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/
class Library {
    #books; // Приватное свойство #books

    constructor(initialBooks) {
        // Пункт 1: Конструктор класса, принимающий начальный список книг
        // Убеждаемся, что предоставленный массив не содержит дубликатов
        if (new Set(initialBooks).size !== initialBooks.length) {
            throw new Error("Initial list contains duplicate books.");
        }
        
        this.#books = [...initialBooks]; // Присваивание начального списка книг приватному свойству #books
    }

    get allBooks() {
        return this.#books; // Пункт 2: Геттер-функция allBooks, возвращающая текущий список книг
    }

    addBook(title) {
        // Пункт 3: Метод addBook, добавляющий книгу в список
        if (this.#books.includes(title)) {
            throw new Error(`Book "${title}" already exists in the library.`);
        }
        this.#books.push(title);
    }

    removeBook(title) {
        // Пункт 4: Метод removeBook, удаляющий книгу из списка по названию
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Book "${title}" not found in the library.`);
        }
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        // Пункт 5: Метод hasBook, проверяющий наличие книги в библиотеке
        return this.#books.includes(title);
    }
}

// Пример использования:

try {
    const library = new Library(['Book1', 'Book2', 'Book3']);

    console.log(library.allBooks); // Проверяем, что геттер-функция allBooks работает корректно

    library.addBook('Book4'); // Добавляем книгу
    console.log(library.allBooks); // Проверяем, что книга была добавлена

    library.removeBook('Book2'); // Удаляем книгу
    console.log(library.allBooks); // Проверяем, что книга была удалена

    console.log(library.hasBook('Book3')); // Проверяем наличие книги в библиотеке
    console.log(library.hasBook('Book5')); // Проверяем отсутствие книги в библиотеке

    library.addBook('Book1'); // Ожидаем получить ошибку, так как книга уже существует
} catch (error) {
    console.error(error.message); // Обработка ошибок
}
