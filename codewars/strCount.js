function strCount(str, letter) {
    // reikia kaupiamojo
    let kiekis = 0;

    // einam per teksta
    for (let i = 0; i < str.length; i++) {
        // paimama raide
        const raide = str[i];

        // jeigu raide yra ta, kuriuos ieskau
        if (raide === letter) {
            // kaupiamasis +1
            kiekis++;
        }
    }

    // grazinam kaupiamaji
    return kiekis;
}

console.log(strCount('Hello', 'o'), '->', 1);
console.log(strCount('Hello', 'l'), '->', 2);
console.log(strCount('', 'z'), '->', 0);
console.log(strCount('aaaa', 'z'), '->', 0);
console.log(strCount('aaaa', 'a'), '->', 4);


console.log("____________________________________________");

function strCount1 (str, letter){
    let kiekis = 0;
    for(let i=0; i<str.length; i++){
        const raide = str[i];
        if (raide === letter) {
            kiekis++
        }
    }
    return kiekis;
}



console.log(strCount1('Hello', 'o'), '->', 1);
console.log(strCount1('Hello', 'l'), '->', 2);
console.log(strCount1('', 'z'), '->', 0);
console.log(strCount1('aaaa', 'z'), '->', 0);
console.log(strCount1('aaaa', 'a'), '->', 4);