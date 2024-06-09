const text = 'Javascript is a scripted language and no1 language in the world and case sensitive and also oop';
// const text1 = document.getElementById.i;
var a=20;
const b=10;
let c=90;
function change(){
    document.getElementById('des').innerHTML=text;
    // document.getElementById('des').innerHTML=text1;
    document.write("<br>"+ a);
    document.write("<br>"+ b);
    document.write("<br>"+ c);
}
change();

var num = 900719925124740998n;
var v = true;

//symbol data type
var c1 = Symbol('Hello');
var c2 = Symbol('Hello');

//Object
var student = {
    name: 'Anwar',
    age: 20,
    rollNo: 23,
    field: 'Software',
    interest: 'web developer',
    intro: function(){
        return "<br> Age: " + this.age + " & Name: " + this.name;
    }
};
document.write(student.intro());

// template string
var name1 = prompt('What is your name');
var my =`<br>Your name: ${name1}`
document.write(my + '<br><br><br>');