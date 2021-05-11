function testEven(n) {
   return n % 2 === 0; 
   
}


  console.log(testEven(0), true, "testEven for 0");
  console.log(testEven(0.5), false, "testEven for 0.5");
  console.log(testEven(1), false, "testEven for 1");
  console.log(testEven(2), true, "testEven for 2");
  console.log(testEven(-4), true, "testEven for 2");
 
  console.log("__________________________");


  function zeroFuel(distanceToPump, mpg, fuelLeft) {
    const arPavyks = distanceToPump / mpg;
    if (arPavyks <= fuelLeft) {
    return true; 
  }
  else {
      return false;
  }
    return arPavyks;
}

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
