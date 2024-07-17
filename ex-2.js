function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  //console.log(books);
  let index = -1;
  for (let i = 0; i < books.length; i++) {
    //console.log(books[i].title, i);
    if (books[i].title === searchTitle) {
      index = i;
    }
  }
  return index;
}
const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
]; // input

console.log(findBookIndex(books, "Gone with the Wind"));
// ถ้าค่า argument ที่ส่งไปใน parameter ของ searchTitle ตรงกับข้อมูลที่มีอยู่ใน array --> output จะเป็นเลขตำแหน่ง index
// ถ้าค่า argument ที่ส่งไปใน parameter ของ searchTitle ไม่ตรงกับข้อมูลที่มีอยู่ใน array --> output เป็นเลขตำแหน่ง index ที่ -1
