function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  //console.log(students);
  let index = -1;
  for (let i = 0; i < students.length; i++) {
    // console.log(students[i], i);
    if (students[i] === searchStudent) {
      index = i;
    }
  }
  return index;
}
const students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
]; // input

console.log(findStudentIndex(students, "John"));
// ถ้าค่า argument ที่ส่งไปใน parameter ของ searchStudent ตรงกับข้อมูลที่มีอยู่ใน array --> output จะเป็นเลขตำแหน่ง index
// ถ้าค่า argument ที่ส่งไปใน parameter ของ searchStudent ไม่ตรงกับข้อมูลที่มีอยู่ใน array --> output เป็นเลขตำแหน่ง index ที่ -1

// ตอบคำถามตรงนี้จ้า
// linear Search Big o --> o(n) เพราะต้องทำงานแบบวนloop ผ่านสมาชิกทุกตัวใน array
