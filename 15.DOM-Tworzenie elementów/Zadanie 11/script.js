let string = "M - kup 2kg x, jeśli będą y to weź 12, Z- po cholere wziąłeś tyle x? M - bo były y; #żart o mężu programisty, X np piwo, Y np jajka";
let words = [];
let numbers = [];

function iterateString() {
  let words = string.split(" ");

  words.forEach((e) => {
    let i = parseInt(e, 10);
    if (!isNaN(i)) {
      numbers.push(i);
    }
  });

  let pro = 1;
  for (let i = 0; i < numbers.length; i++) {
    pro = pro * numbers[i];
  }

  createDivs(pro);
}

iterateString();

function createDivs(pro) {
  for (var i = 1; i < pro; i++) {
    let divElement = document.createElement("div");

    // create text node
    let divElementText = document.createTextNode(string);

    // append text node to div
    divElement.appendChild(divElementText);

    // append div element to document
    document.body.appendChild(divElement);
  }
}
