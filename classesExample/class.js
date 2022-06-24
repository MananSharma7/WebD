const User = require("./script.js");

const mem1 = new User("Manan","man@gmail.com");

console.log(mem1.getInfo());
mem1.enrollCourse("English");
mem1.enrollCourse("Maths");
mem1.enrollCourse("Physics");

var f = mem1.getCourseList();
console.log(f);
f.forEach(s => console.log(s));