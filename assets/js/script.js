var html1=document.getElementById("htmlnota1");
var html2=document.getElementById("htmlnota2");
var html3=document.getElementById("htmlnota3");
var promhtml=document.getElementById("htmlpromedio");

var notahtml1=+prompt("Ingrese la nota 1 de HTML=");
var notahtml2=+prompt("Ingrese la nota 2 de HTML=");
var notahtml3=+prompt("Ingrese la nota 3 de HTML=");

var promedio=(notahtml1+notahtml2+notahtml3);


html1.innerHTML =notahtml1;
html2.innerHTML=notahtml2;
html3.innerHTML=notahtml3;


/* html3.innerHTML=htmlnota3;


htmlnota1.innnerHTML=htmlnota1;
htmlnota2.innnerHTML=notahtml2;
htmlnota3.innnerHTML=notahtml3;
htmlpromedio.innnerHTML=promedio/3;

 */

