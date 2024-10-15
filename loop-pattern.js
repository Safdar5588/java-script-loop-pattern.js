let str = "";

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
        str += "*";
    }
    str += "\n";
}

console.log(str);



let st = "";
for (i = 0; i < 4; i++) {
    for (j = 0; j < 6; j++) {
        if (i == 0 || i == 3 || j == 0 || j == 5) {
            st += "*";
        }
        else {
            st += ".";
        }
    }
    st += "\n";
}

console.log(st);








let stri = ""
for (j = 0; j < 4; j++) {
    for (i = 0; i < j + 1; i++) {
        stri += "*";
    }
    stri += "\n";
}

console.log(stri);


let string = "";

for (j = 0; j < 4; j++) {
    for (i = 0; i < j * 2 + 1; i++) {
        string += "*";
    }
    string += "\n";
}

console.log(string);



let string1 = '';

for (j = 0; j < 4; j++) {
    for (k = 0; k < 3 - j; k++) {
        string1 += "."
    }
    for (i = 0; i < j * 2 + 1; i++) {
        string1 += "*";
    }
    string1 += "\n";
}
console.log(string1)


// let string2 = ""
// for(j = 0; j<4; j++){
//     for(k = 0; k <3-j; k++){
//         string2 += "."
//     }
//     for(i = 0; i<j*2+1; i++){
//         string2 += "*";
//     }
//     string2 += "\n";
// }

// console.log(string2)


let string3 = ""
for (j = 3; j > 0; j--) {
    for (k = 0; k < 4 - j; k++) {
        string3 += "."
    }
    for (i = 0; i < j * 2 - 1; i++) {
        string3 += "*";
    }
    string3 += "\n";
}
console.log(string3)




let string4 = "";
for (i = 0; i < 7; i++) {
    for (j = 0; j < 7; j++) {
        if (i == 0 || i == 6 || j == i) {
            string4 += "*";
        } else {
            string4 += " ";
        }
    }
    string4 += "\n";
}

console.log(string4);


let string5 = "";
for (i = 0; i < 7; i++) {
    for (j = 0; j < 7; j++) {
        if (i == 0 || i == 6 || j == 6 - i) {
            string5 += "*";
        } else {
            string5 += " ";
        }
    }
    string5 += "\n";
}

console.log(string5);



let string6 = "";
for (i = 0; i < 7; i++) {
    for (j = 0; j < 7; j++) {
        if (i == 0 || i == 6 || j == i || j == 6 - i) {
            string6 += "*";
        } else {
            string6 += " ";
        }
    }
    string6 += "\n";
}

console.log(string6)





let string7 = ""
for (i = 0; i < 7; i++) {
    for (j = 0; j < 7; j++) {
        if (i == 0 || i == 6 || j == 0 || j == 6 || j == 6 - i || j == i) {
            string7 += "*";
        } else {
            string7 += " ";
        }
    }
    string7 += "\n";
}

console.log(string7)


let string8 = ""

for (i = 0; i < 9; i++) {
    for (j = 0; j < 11; j++) {
        if (i == 0 | i == 8 || j == 5) {
            string8 += "*"
        }
        else {
            string8 += " "
        }
    }
    string8 += "\n"
}

console.log(string8)


let string9 = ""

for (i = 0; i < 10; i++) {
    for (j = 0; j < 11; j++) {
        if (i == 0 || i == 4 || i == 9 || (i >= 0 && i < 5 && j == 0) || (i < 9 && i > 4 && j == 10)) {
            string9 += "*"
        }
        else {
            string9 += " "
        }
    }
    string9 += "\n"

}

console.log(string9)



let string10 = ""

for (i = 0; i < 11; i++) {
    for (j = 0; j < 9; j++) {
        if (i == 0 || i == 10 || i == 5 || (j == 8 && i < 5 && i >= 0) || (j == 0 && i > 5 && i < 10)) {
            string10 += "*"
        }
        else {
            string10 += " "
        }
    }
    string10 += "\n"
}
console.log(string10)



let string11 = ""

for (i = 0; i < 11; i++) {
    for (k = 0; k < 10 - i; k++) {
        string11 += " "
    }
    for (j = 0; j < i * 2 + 1; j++) {
        if (i == 5 || j == 0 || j == i * 2) {
            string11 += "A"
        }
        else {
            string11 += " "
        }

    }
    string11 += "\n"
}

console.log(string11);


let string12 = "";
for (i = 0; i < 11; i++) {
    for (j = 0; j < 8; j++) {
        if (i == 0 || i == 10 || i == 5 || j == 0 || j == 7) {
            string12 += "B";
        }
        else {
            string12 += " ";
        }
    }
    string12 += "\n";
}

console.log(string12);


let string13 = "";
for (i = 0; i < 11; i++) {
    for (j = 0; j < 8; j++) {
        if (i == 0 || i == 10 || j == 0) {
            string13 += "C";
        }
        else {
            string13 += " ";
        }
    }
    string13 += "\n";
}

console.log(string13);


let string14 = "";
for (i = 0; i < 5; i++) {
    for (k = 0; k < 4 - i; k++) {
        string14 += " ";
    }
    for (j = 0; j < i * 2 + 1; j++) {
        if (i == 0 || j == 0 || j == i * 2) {
            string14 += "*";
        }
        else {
            string14 += ".";
        }
    }
    string14 += "\n";
}


for (i = 0; i < 5; i++) {
    for (k = 0; k < i; k++) {
        string14 += " ";
    }
    for (j = 0; j < 9 - i * 2; j++) {
        if (i == 4 || j == 0 || j == 8 - i * 2) {
            string14 += "*";
        }
        else {
            string14 += ".";
        }

    }
    string14 += "\n"
}


console.log(string14);


let heart = "";

for (i = 0; i < 11; i++) {
    for (k = 0; k < 2 - i; k++) {
        heart += " ";
    }
    for (j = 0; j <= (i + 3) * 2 && j < 11; j++) {

        if ((i == 0 && (j == 0 || j == 1 || j == 5 || j == 6))
            || ((i == 1) && (j == 0 || j == 3 || j == 5 || j == 8))
            || ((i == 2) && (j == 0 || j == 5 || j == 10)) || ((i == 3 || i == 4 || i == 5) && (j == 0 || j == 10))
            || ((i == 6) && (j == 1 || j == 9)) || ((i == 7) && (j == 2 || j == 8)) || (i == 8) && (j == 3 || j == 7)
            || ((i == 9) && (j == 4 || j == 6)) || ((i == 10) && (j == 5))) {
            heart += "*";
        }
        else {
            heart += " ";
        }
    }
    heart += "\n";
}
console.log(heart);



let staric = ""

for (i = 0; i < 5; i++) {
    for (j = 0; j < i + 1; j++) {
        staric += "*"
    }
    for (k = 0; k < 8 - i * 2; k++) {
        staric += " "
    }
    for (l = 0; l < i + 1; l++) {
        staric += "*"
    }
    staric += "\n"
}
console.log(staric)




let starical = ""

for (i = 0; i < 5; i++) {
    for (j = 0; j < 5 - i; j++) {
        starical += "*"
    }
    for (k = 0; k < i * 2; k++) {
        starical += " "
    }
    for (l = 0; l < 5 - i; l++) {
        starical += "*"
    }
    starical += "\n"
}

console.log(starical)




let starica = ""
for (i = 0; i < 5; i++) {
    for (j = 0; j < i + 1; j++) {
        starica += "*"
    }
    for (k = 0; k < 8 - i * 2; k++) {
        starica += " "
    }
    for (l = 0; l < i + 1; l++) {
        starica += "*"
    }
    starica += "\n"
}
for (i = 0; i < 4; i++) {
    for (j = 0; j < 4 - i; j++) {
        starica += "*"
    }
    for (k = 0; k < (i + 1) * 2; k++) {
        starica += " "
    }
    for (l = 0; l < 4 - i; l++) {
        starica += "*"
    }
    starica += "\n"
}

console.log(starica)




let daimond = "";
for (i = 0; i < 5; i++) {
    for (j = 0; j < 5 - i; j++) {
        daimond += "*"
    }
    for (k = 0; k < i * 2; k++) {
        daimond += " "
    }
    for (l = 0; l < 5 - i; l++) {
        daimond += "*"
    }
    daimond += "\n"
}
for (i = 0; i < 5; i++) {
    for (j = 0; j < i + 1; j++) {
        daimond += "*"
    }
    for (k = 0; k < 8 - i * 2; k++) {
        daimond += " "
    }
    for (l = 0; l < i + 1; l++) {
        daimond += "*"
    }
    daimond += "\n"
}
console.log(daimond)


let triangle = ""

for (i = 0; i < 5; i++) {
    for (k = 0; k < 4 - i; k++) {
        triangle += " "
    }
    for (j = 0; j < i * 2 + 1; j++) {
        if (i == 0 || i == 4 || j == 0 || j == i * 2) {
            triangle += "*"
        }
        else {
            triangle += " "
        }

    }
    triangle += "\n"
}

console.log(triangle)



{
let stri ="";

for(i=0; i<11; i++){
    for(j=0; j<11; j++){
        if(i==0 && j<5|| i==5 || i==10 && j>5 
        ||j==5 ||j==0 && i>5 ||j==10 && i<5){
            stri +=" * ";
        }
        else{
            stri +="   ";
        }
    }
    stri += "\n";
}

console.log(stri);

}

