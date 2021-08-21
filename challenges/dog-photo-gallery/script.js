let ul = document.getElementsByTagName("ul")[0];
let dogGenerator = () => {
  ul.innerHTML = `<li><h1>Loading...</h1></li>`;
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((res) => res.json())
    .then(
      (data) =>
        (ul.innerHTML = `<li><img src= "${data.message}" alt="Dog Image"></li>`)
    );
};
