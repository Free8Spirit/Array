// Author: Vert, David

// MUSKETEERS *****************************************************************************************

const musketeers = ["Athos", "Porthos", "Aramis"];

for (var i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}

musketeers.unshift("D'Artagnan");

musketeers.forEach(myElement => {
    console.log(`${myElement}`);
});

musketeers.pop();

var xtract;
for (xtract of musketeers) {
    console.log(xtract);
}

// SUM OF VALUES **************************************************************************************

const values = [3, 11, 7, 2, 9, 10];
var i = 0;
var sum = 0;

while (i < values.length) {
    sum = sum + values[i];
    i++;
}

console.log(sum);

// ARRAY MAXIMUM **************************************************************************************

// using existing array with same values ^-^

var shorty = 1;

for (i = 0; i < values.length - 1; i++) {
    var z = values[i];
    var y = values[i + 1];

    if (z < y) {
        if (shorty <= y) {
            shorty = y;
        } else if (shorty >= y) {
            shorty = shorty;
        }
    } else if (z > y) {
        if (shorty <= z) {
            shorty = z;
        } else if (shorty >= z) {
            shorty = shorty;
        }
    } else if (z = y) {
        if (shorty <= z || y) {
            shorty = y || z;
        } else if (shorty >= z || y) {
            shorty = shorty;
        }
    } else {
        shorty = "Hidden treasure!";
    }
}

console.log(shorty);