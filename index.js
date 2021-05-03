const bottles = document.getElementById("bottles");
count = 99;
var myArray = [];
var j = 0;

function bottlesOnTheWall() {
  while (count > 0) {
    if(count > 2) {
      myArray.push(`${count} bottles of beer on the wall, ${count} bottles of beers. Take one down and pass it around, ${count - 1} bottles of beer on the wall`)
    } else if (count === 2) {
      myArray.push(`${count} bottles of beer on the wall, ${count} bottles of beers. Take one down and pass it around, ${count - 1}bottle of beer on the wall`)
    } else if (count === 1) {
      myArray.push(`${count} bottle of beer on the wall, ${count} bottles of beers. No more bottle of beer on the wall`)
    } else {
      myArray.push(`No more bottles of beer on the wall. No more bottles of beer.  Go to the shop and buy some ${count} more.`)
    }
    count--
  }
  while (j < myArray.length) {
    var liElement = document.createElement("li");
    var text = document.createTextNode(myArray[j]);
    liElement.appendChild(text);
    bottles.appendChild(liElement);
    var bottlesArray = Array.from(bottles);
    if(j % 2) {
      bottlesArray[j].style.width = "300px";
    } else {
      bottlesArray[j].style.width = "500px";
    }
    j++;
  }
}
bottlesOnTheWall();
