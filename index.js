
function bottlesOnTheWall(count) {
  while (count > 0) {
    let text;
    if(count > 2) {
      text = `${count} bottles of beer on the wall, ${count} bottles of beers. Take one down and pass it around, ${count - 1} bottles of beer on the wall`
    } else if (count === 2) {
      text = `${count} bottles of beer on the wall, ${count} bottles of beers. Take one down and pass it around, ${count - 1}bottle of beer on the wall`
    } else if (count === 1) {
      text = `${count} bottle of beer on the wall, ${count} bottles of beers. No more bottle of beer on the wall`
    } else {
      text = `No more bottles of beer on the wall. No more bottles of beer.  Go to the shop and buy some ${count} more.`
    }
    const bottles = document.getElementById("bottles");
    const liElement = document.createElement("li");
    liElement.appendChild(document.createTextNode(text))
    bottles.appendChild(liElement);
    count % 2 ? liElement.style.width = "300px"
    : liElement.style.width = "500px";
    count--;
  }
}
bottlesOnTheWall(99);
