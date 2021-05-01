const bottles = document.getElementById("bottles");
count = 99;
var myArray = [];

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
  myArray.forEach(function (item) {
    var divElement =  document.createElement("li");
    var text = document.createTextNode(item);
    divElement.appendChild(text);
    bottles.appendChild(divElement);
  })

  console.log(myArray)
}
bottlesOnTheWall();
