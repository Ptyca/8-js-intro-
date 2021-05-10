const pirmas = "1"; 
console.log(pirmas);
const antras = "344";
console.log((antras));
const trecias = "4523";
console.log(trecias);

const pirmasZodis = "svarbu";
const antrasZodis = "zinoti";
const treciasZodis = "saika"; 

console.log(pirmasZodis);
console.log(antrasZodis);
console.log(treciasZodis);

console.log("------------------");

const skaiciuSeka = [12, 15, 16, 13, -3]
console.log(skaiciuSeka);

const skaiciuSeka2 = [12312, 23234, 111, 124, -3242]
console.log(skaiciuSeka2);

const zodziuSeka = ['labas', 'rytas', 'sakau', 'tau', "siandien"]
console.log(zodziuSeka);

const zodziuSeka2 = ['kaip', 'niekada', 'norisi', 'gerti']
console.log(zodziuSeka2);

console.log("_____________________");

const skaic1 = 3
const skaic2 = 8
const skaic3 = 12
const skaic4 = -5
const skaic5 = 12

const suma = skaic1 + skaic2 + skaic3 + skaic4
console.log(suma);


const vardas1 = "Petras";
const vardas2 = "Vytautas";
const vardas3 = "Patrikas";

const varduSou = vardas1 + " " + vardas2 + " " + vardas3
console.log(varduSou);

const lygtis = skaic1 - skaic2 + skaic3 - skaic4 + skaic5
console.log(lygtis);

console.log("_----------------------")

const seka1 = [10, 12, 45, 56, -23];

const sekosveiksmai = seka1[0] + seka1[1] - seka1[3] + seka1[4]
console.log(sekosveiksmai);

console.log("_____________________________________");

const a=6; 
const b=10;

if (a < b) {
    console.log('Pomidoras');
 } else {
        console.log('Bandykite dar karta');
}


if (a>b) {
    console.log("Pomidoras");
}
else {console.log('bandykite dar karta');
}

if (a<=b) {
    console.log("Pomidoras");
}
else {console.log('bandykite dar karta');
}

if (a>=b) {
    console.log('Pomidoras');
}
else {console.log('bandykite dar karta');
}

console.log("_______________________________");

const labukas1 = ["labas", "krabas", "kaip", "gyvas" ];
const labukas2 = ["pirk", "alu", "degtine", "saldainius"];
const labukas3 = 'saldainis yra geris';
const labukas4 = 'dantistai irgi dziaugiasi'
const labukas3Ilgis = labukas3.length;
const labukas4Ilgis = labukas4.length;

console.log(labukas1);
console.log(labukas2);
console.log(labukas3, labukas3Ilgis);
console.log(labukas4, labukas4Ilgis);

if (labukas3Ilgis > labukas4Ilgis) {
    console.log("dar ir kaip ilgesnis");
}
    else {console.log("nebesvaik");}


if (labukas3Ilgis < labukas4Ilgis ) {
    console.log("dar ir kaip ilgesnis");
} else {console.log("nebesvaik");}

console.log("________________________________");

function sum(min, max) {
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween +=i;
    }
    return sumBetween;
}

console.log(sum (0,0));
console.log(sum (0, 4));
console.log(sum (0, 100));
console.log(sum (574, 815));
console.log(sum (-50, 50));
console.log(sum (-70, 30));

console.log("______________________________");

const minA = 0;
const maxA = 0;

function sumA (numCount) {
    let sumBetween = 0;
    for (let i=minA; i<=maxA; i++) {
        sumBetween += i;
    }
    return sumBetween;
}
console.log(sumA(0, 0));
console.log(sum(0, 4));

console.log("_________________________");

const minB = 0;
const maxB = 4;

function sumB (numCount) {
    sumBetween = 0;
    for (let i=minB; i<=maxB; i++) {
        sumBetween += i;
    }
return sumBetween;
    }
console.log(sumB(0, 4));
console.log(sum (574, 815));

console.log("_______________________");

const minC = 0;
const maxC = 100;

function sumC (numbcount){
    let bendraSuma = 0;
    for (let i=minC; i<=maxC; i++){
        bendraSuma += i;

    }
    return bendraSuma;
}
console.log(sumC(0, 100));

console.log("__________________");

const minD = 574;
const maxD = 815;

function sumD (irvelsumavimas) {
    let bendraSuma = 0;
    for (let i=minD; i<=maxD; i++){
        bendraSuma += i;
    }
    return bendraSuma;
}
console.log(sumD(574, 815));

console.log("_____________________");

const minE = -50;
const maxE = 50;

function sumE (skaiciuSuma) {
    let bendratis = 0;
    for (let i=minE; i<=maxE; i++) {
        bendratis += i;
    }
    return bendratis;
}

console.log(sumE(-50, 50));

console.log("_____________________");

const minF = -70;
const maxF = 30;

function sumF (pridejimai) {
    let bendraSudetis = 0;
    for (let i=minF; i<=maxF; i++){
        bendraSudetis += i;
    }
    return bendraSudetis;
}
console.log(sumF(-70, 30));

console.log("___________________________________");

const raides= ['a','b','c','d','e','f'];
console.log(raides);

const dr = raides.reverse().join('');
console.log(dr);

const seka = [10, 12, 14, 15, 20];
const rev = seka.reverse().join();
console.log(rev);