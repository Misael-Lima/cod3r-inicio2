let a = 7;
let b = 94;

var temp = a; //temp e uma varialvel temporaria que mantem o valor antigo
a = b;
b = temp;

console.log("o valor de a = " + a);
console.log("o valor de b = " + b);

//outra maneira

// var temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];
