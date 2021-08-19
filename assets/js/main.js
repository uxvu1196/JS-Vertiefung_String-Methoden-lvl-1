/* 
LEV1_1
Aufgabenstellung


Erstelle zwei Variablen nachName und vorName.
Zeige die Länge der beiden Variablen in der Konsole an.
Erstelle noch ein Variable “name”, die die Summe der beiden Variablen ist.
Zeige die Länge der Variable “name” in der Konsole an.
 */

let nachName = "Vu"
let vorName = "Uyen"

console.log(nachName.length, vorName.length)

let name = nachName + vorName
console.log(name.length)

/*
LEV1_2
Aufgabenstellung

Verwende den Befehl indexOf() um die Position eines Zeichens in einer Zeichenketten als Ergebnis in der Konsole zu erhalten.

let txt = ”How inappropriate to call this planet Earth, when clearly it is Ocean.”

Suche die Position des Zeichens “h” in der Variablen txt.
Suche die Position des Zeichens “Earth” in der Variablen txt.
Suche die Position des Zeichens “Moon” in der Variablen txt. */

let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."
console.log(txt.indexOf("h"))

// ich durchsuche die Zeichenkette "txt" nach dem ersten vorkommen vom "h" und nach der ersten kleinen Buchstabe. CaseSensetive, er achtet auf Groß- und Kleinschreibung. 

console.log(txt.indexOf("Earth"))
console.log(txt.indexOf("Moon"))

//-1 bedeutet, dass es nicht vorkommt in dem Satz bzw. nicht gefunden

/* 
LEV1_3
Aufgabenstellung

Verwende den Befehl search() um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.

let txt2 = ”Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.”

Suche die Position des Zeichens “;” in der Variablen txt.
Suche die Position des Zeichens “green” in der Variablen txt.
Suche die Position des Zeichens “blue” in der Variablen txt. 
*/

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(";"))
console.log(txt2.search("green"))
// regular expression, man kann mit search kompliziertere Suchbegriffe schreiben und von mit negativen Weten anfangen bzw. von hinten
console.log(txt2.search("Blue"))

/* 
LEV1_4
Aufgabenstellung

Verwende den Befehl slice() um das Ergebnis zu erhalten.

let A = 'Sam is going to coding school';

Verwende die Methode "slice" um diese Ausgabe auf dem Bildschirm anzuzeigen:
Sam
is
am is going to school
is going to school
school
Sam is school

Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis im Dokument auszugeben.
 */

let A = 'Sam is going to coding school';
let myVar = A.slice(0,3)
document.write(myVar+"<br>");

myVar = A.slice(4,6)
document.write(myVar+"<br>")

// am is going to school
// das coding wurde rausgeschnippselt mit dem Pluszeichen 
myVar = A.slice(1, 16) + A.slice(23)
document.write(myVar+"<br>")

myVar = A.slice(23)
document.write(myVar+"<br>")

myVar = A.slice(0,7) + A.slice(23)
document.write(myVar+"<br>")

/* 
LEV1_5
Aufgabenstellung

Verwende den Befehl substring() um die gewünschten Zeichenketten zu erhalten.

let text = 'Sam is back from coding school';

Zeige mit Hilfe der Methode "substring" diese Ausgabe in einem HTML-Dokument an:

Sam
is 
school
Sam is school

Speichere jedes Ergebnis in einer Variablen und verwende document.write(deine gespeicherte substring variable+"<br"), um das Ergebnis anzuzeigen.
 */

document.write("------------ <br>")
let text = 'Sam is back from coding school';

myVar = text.substring(0,3)
document.write(myVar+"<br>")

myVar = text.substring(4,6)
document.write(myVar+"<br>")

myVar = text.substring(23)
document.write(myVar+"<br>")

myVar = text.substring(0,7) + text.substring(23)
document.write(myVar+"<br>")

/* 
Lev1_6
Aufgabenstellung

Verwende den Befehl substr() um die gewünschten Zeichenketten zu erhalten.

let text = “Sam is working at coding school”;

Zeige mit Hilfe der Methode "substr" diese Ausgabe in einem HTML-Dokument an:

Speichere jedes Ergebnis in einer Variablen und verwende document.write(let+"<br>"), um das Ergebnis anzuzeigen.
 */

document.write("------------ <br>")
let text2 = "Sam is working at coding school";

//Sam
myVar = text2.substr(0,3)
document.write(myVar+"<br>")
// der erster Parameter zeigt an wo ich starten will und der zweite wie viele Zeichen ich möchte 

//is
myVar = text2.substr(4,2)
document.write(myVar+"<br>")

//at school
myVar = text2.substr(15,2) + text2.substr(24,7)
document.write(myVar+"<br>")

//Sam works at school
myVar = text2.substr(0,3) + text2.substr(6,5) + text2.substr(5,1) + text2.substr(14,3) + text2.substr(24,7)
document.write(myVar+"<br>")
// FRAGEN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

document.write("------------ <br>")
/* 
LEV1_7
Aufgabenstellung

Verwende den Befehl replace() um die gewünschten Zeichenketten zu erhalten.

let text = “Sam is good at coding school”;

Zeige mit der Methode "replace" diese Ausgabe in einem HTML-Dokument an:

Sam is bad at school
Tom is good at school 
Sam is good at tennis

Speichere jedes Ergebnis in einer Variablen und verwende document.write(let+"<br"), um das Ergebnis anzuzeigen.
 */

let text3 = "Sam is good at coding school";

myVar = text3.replace("good", "bad") .replace("coding", " ")
document.write(myVar+"<br>")

myVar = text3.replace("Sam", "Tom") .replace("coding", " ")
document.write(myVar+"<br>")

myVar = text3.replace("school", "tennis") .replace("coding", " ")
document.write(myVar+"<br>")

document.write("------------ <br>")
/*
LEV1_8
Aufgabenstellung

Verwende den Befehl toLowerCase(), toUpperCase() um die gewünschten Zeichenketten zu erhalten.

let text = “Sam is going to coding school”;

Erzeuge mit den Methoden "toLowerCase-toUpperCase" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden die du bereits gelernt hast.

Speichere jedes Ergebnis in einer Variablen und verwende document.write(let+"<br"), um das Ergebnis anzuzeigen.
*/

let text4 = "Sam is going to coding school";

//SAM IS GOING TO SCHOOL
myVar = text4.replace("coding", " ").toUpperCase() 
document.write(myVar+"<br>")

//sam is going at school
myVar = text4.replace("coding", " ").toLowerCase() 
document.write(myVar+"<br>")

//SAM is going to SCHOOL
myVar = text4.substr(0,3).toUpperCase() + text4.substr(3,12).toLowerCase() + text4.substr(-7,7).toUpperCase().replace("coding", " ")
document.write(myVar+"<br>")
// 22 ätte auch geklappt beim letzten

//sam IS GOING TO school
myVar = text4.substr(0,3).toLowerCase() + text4.substr(3,12).toUpperCase() + text4.substr(-7,7).toLowerCase().replace("coding", " ")
document.write(myVar+"<br>")

//Sam Is Going To School
myVar = text4.substr(0,3).toUpperCase() + text4.substr(3,12).toLowerCase() + text4.substr(-7,7).toUpperCase().replace("coding", " ")
document.write(myVar+"<br>")

// FRAGEN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.write("------------ <br>")

/* 
LEV1_9
Aufgabenstellung

Verwende die Methode concat() um die gewünschten Zeichenketten zu erhalten.

let text1 = “Sam is going to coding school”;
let text2 = “Tom”
let text3 = “programming bike”
let text4 = “and” 

Erzeuge mit "concat" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden die du bereits gelernt hast.

Tom is going to school and to the movie theater

Speichere jedes Ergebnis in einer Variablen und verwende document.write(let+"<br"), um das Ergebnis anzuzeigen. */

let textA = "Sam is going to coding school";
let textB = "Tom";
let textC = "programming bike";
let textD = "and";
let textE = "to the"
let textF ="movie theater"

// Sam is going to school and to the movie theater
myVar = textA.replace("coding", " ").concat(" ", textD, " ", textE, " ", textF)
document.write(myVar+"<br>")

//Sam is going to movie theater
myVar = textA.replace("coding school", " ").concat(" ", textF)
document.write(myVar+"<br>")

//Tom and Sam are going to school
myVar = textB.concat(" ", textD, " ", textA).replace("is", "are").replace("coding", " ")
document.write(myVar+"<br>")

//Tom and Sam are going to gym and to the movie theater

myVar = textB.concat(" ", textD, " ", textA, " ", textD, " ", textE, " ", textF).replace("is", "are").replace("coding school", "gym")
document.write(myVar+"<br>")
