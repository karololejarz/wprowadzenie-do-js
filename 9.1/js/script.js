function getTriangleArea(a, h) {
  if (a > 0 && h > 0) {
    return a * h / 2;    
  } else if (a < 0) {
    return 'Incorrect data - a must be bigger than 0';
  } else {
    return 'Incorrect data - h must be bigger than 0';
  }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(-1, 15);
var triangle3Area = getTriangleArea(10, -1);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);