//let a = "Ivan";
//let b67 = 43;
//let linNumber = 2324;

//let zodiak = ["Козерог", 1, 1, 19];


//let man = ["Ivan", "male", 176, 93, "Ivanov"];

//console.log(zodiak);
//console.log(man);

//console.log("Длинна массива");

//console.log(zodiak.length);
//console.log(man[4]);

//man[0] = "Sergey";
//console.log(man);


let a = [1, 2, 3, 4];


console.log(a)

let t = a[0];//1

a[0] = a[a.length - 1];

console.log(a)

a[a.length - 1] = t;

console.log(a);


console.log(a[888]);

//for(let i=0; i<a.length;i++){
//    document.querySelector(".out-1").innerHTML +=a[i]+" ";
//}

let out = '';
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        out += a[i] + '__';
    }
}
document.querySelector('.out-1').innerHTML = out;


//max
let b = [2, 23, 354, 234, 2, 34, 566, 7643, 23, 4, 56, 7,];
let max = b[0];//4

for (let i = 0; i < b.length; i++) {
    if (b[i] > max) {
        max = b[i];
    }
}

console.log('max:' + max);

//sum

let sum = 0;

for (let i = 0; i < b.length; i++) {
    sum = sum + b[i]
}

console.log('sum:' + sum);
