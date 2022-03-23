document.querySelectorAll(".product__rating").forEach(item => {
  for (let i = 0; i < +item.dataset.rating; i++) {
    let green = document.createElement("img");
    green.src = "./images/trending/star-green.svg";
    item.append(green);
  }
  if (+item.dataset.rating < 5) {
    for (let i = 0; i < 5 - +item.dataset.rating; i++) {
      let white = document.createElement("img");
      white.src = "./images/trending/star-white.svg";
      item.append(white);
    }
  }
}); 