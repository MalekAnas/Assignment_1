"use strict";

/*
Skapa ett Book konstruktur (constructor function) med följande properties och methods:

Namn
Ämne
Antal sidor
ISBN nummer
getBookInfo (method)
*/
function Book(title, gener, pages, isbn) {
  this.title = title;
  this.gener = gener;
  this.isbn = isbn;
  this.pages = pages;

  this.getBookInfo = function () {
     
         return console.log(
      "Bok: " +
        this.title +
        "\nGener: " +
        this.gener+
        "\nPages: " +
        this.pages +
        "\nISBN: " +
        this.isbn +
        "\n-----"
    );
    
    
  };
}



//Skapa en array med namnet books och lägg till 3 böcker (book objekt) i array:n books (hårdkoda).
let books = [];

books.push(new Book("Harry potter", "Fantasy", 609, "1654887984"));
books.push(new Book("Dark", "siencfiction", 403, "841694165416514"));
books.push(new Book("Utopia", "Philosophy", 180, "654164469416514"));

//Låt användaren mata in antal böcker som ska läggas till. (Tip: använd prompt())
let numberOfBooks = prompt("How many books you wanna add???"  );

//Låt användaren mata in informationen en efter en d.v.s bookens namn, ämne, antal sidor och ISBN nummer. (Tip: använd prompt())
for (let i = 0; i <  numberOfBooks; i++) {

  let addName = prompt("What this book is called? ");
  let addGener = prompt("What is it all about? ");
  let addNumOfPages = prompt("How many oages is this book?");
  let addIsbn = prompt("ISBN Nummer: ");
  //Lägg till böckerna i array:n (books).
  books.push(new Book(addName,addGener,addNumOfPages,addIsbn));
}


//Skriv ut alla böcker till konsolen med hjälp av getBookInfo metoden.
books.forEach(function (e) {
  e.getBookInfo();
});