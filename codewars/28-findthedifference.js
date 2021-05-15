function differenceInAges(ages) {
let difference = 0;

const min = Math.min(...ages);
const max = Math.max(...ages);
for (let i = min; i <= max; i++) {
  difference = max - min;
}
  return [min, max, difference];
}
  console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
  console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
