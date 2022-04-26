// odd/Even I
/*var num = 32;

if (num % 2 == 0) {
    document.write("Even Number");
}else if (num % 2 == 1) {
    document.write("Odd Number");
}else {
    alert("Error");
} */

//cgpa
document.write('<h2>cgpa</h2>')
var num = 88;

if (num  >= 80 && num <= 100) {
    document.write('I got gpa-5')
}
else if (num  >= 70 && num <= 79) {
    document.write('I got gpa-4')
}   
else if (num  >= 60 && num <= 69) {
    document.write('I got gpa-3.50')
}
else if (num  >= 33 && num <= 39) {
    document.write('I got gpa-1')
} 

// Math Plus
//document.write(4+4)

document.write('<h1>var</h1>')
var a = 10;
var b = 20;
document.write(a + b+'<br>') 
var a = 20;
document.write(a + b)
 /* const pi = 3.1416; */ 
 document.write('<h1>let</h1>')
 let c = 10;
let d = 20;
document.write(c + d+'<br>'); 
let e = 20;
let f = 40;
document.write(e + f); 


//functIon sum
document.write('<h1>functIon sum</h1>')
function sum(a,b,c) {
document.write(a + b + c + "<br>");
}

sum(4,4,3)
sum(5,5,3)
sum(50,5,3)
sum(38,3,3)
sum(36,4,3)


document.write('<h1>functIon substract</h2>')
function substract(a,b) {
    document.write(a-b)
}
substract(10,5)




<document.write('<h1>loop-for,while,do while</h1>')
for (let i = 100; i >= 1; i--) {
    document.write(i+ '<br>');
}
document.write('<h1>LOOP OPPOSITE(from 1 to 100){EVEN / ODD}</h1>')
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        document.write(i +' even number'+'<br>')
    }else if (i % 2 ==1) {
        document.write(i +'odd num' +'<br>')
    }else {
        document.write('Invalid NUMBER')
    }
}




