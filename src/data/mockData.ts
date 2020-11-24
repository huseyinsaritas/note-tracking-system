import IStudent from "../model/IStudent";
import ITeacher from "../model/ITeacher";
import title from "../model/Title";

const students: IStudent[] = [
  { username: "Emirhan", password: "Emirhan123", email: "emirhan@hotmail.com", class: "1A", ects: 3.31 },
  { username: "Ahmet", password: "ahmet123", email: "ahmet@hotmail.com", class: "1A", ects: 1.2 },
  { username: "Mehmet", password: "mehmet123", email: "mehmet@hotmail.com", class: "2A", ects: 2.5 },
  { username: "Ali", password: "ali123", email: "ali@hotmail.com", class: "1A", ects: 3 },
  { username: "Ayşe", password: "ayse123", email: "ayse@hotmail.com", class: "1A", ects: 2.7 },
  { username: "Fatma", password: "fatma23", email: "fatma@hotmail.com", class: "3A", ects: 1.9 },
  { username: "Leyla", password: "leyla123", email: "leyla@hotmail.com", class: "1A", ects: 3.15 },
  { username: "Rıfkı", password: "rıfkı123", email: "rıfkı@hotmail.com", class: "4A", ects: 2.78 },
  { username: "Hasan", password: "hasan123", email: "hasan@hotmail.com", class: "1A", ects: 0.95 },
  { username: "Şaziye", password: "saziye123", email: "saziye@hotmail.com", class: "1A", ects: 3.25 },
];
const teachers: ITeacher[] = [
  { username: "Hüseyin", password: "hsynsrts", email: "hsynsrts@hotmail.com", title: title.Prof },
  { username: "Hasan", password: "hasan123", email: "hasan@gmail.com", title: title.Stj },
  { username: "Buse", password: "buse123", email: "hsynsrts@hotmail.com", title: title.Doc },
  { username: "Asya", password: "asya123", email: "hsynsrts@hotmail.com", title: title.Stj },
  { username: "İmge", password: "imge123", email: "hsynsrts@hotmail.com", title: title.Doc },
];

export { students, teachers };
