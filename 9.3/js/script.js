var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "triceratops";

var correctText = text.replace("Velociraptor", dinosaur.toUpperCase());

console.log(correctText.substring(0, text.length/2));