function drawTree(rows) {
  for (var i = 1; i <= rows; i++) {
    var star = '';
    for (var j = i; j <= rows-1; j++) {
      star += (' ');
    }
    for (var j = 1; j <= (2*i-1); j++) {  
      star += ('*');
    }
    console.log(star);
  }
}

var tree5 = drawTree(5);