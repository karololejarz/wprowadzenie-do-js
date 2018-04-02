var a, b, value;

alert('Calculating (a * a) - (2 * a * b) - (b * b)');
a = prompt('Enter a', a);
b = prompt('Enter b', a);

value = (a * a) - (2 * a * b) - (b * b);

if (value === 0) {
  alert('Value is zero');
  console.log('Value is zero');
} else if (value < 0) {
  alert('Value is negative: ' + value);
  console.log('Value is negative: ' + value);
} else if (value > 0) {
  alert('Value is positive: ' + value);
  console.log('Value is positive: ' + value);
} else {
  alert('Unexpected value');
  console.log('unexpected value');
}

