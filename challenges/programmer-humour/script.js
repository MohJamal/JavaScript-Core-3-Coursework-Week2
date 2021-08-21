let img = document.getElementsByTagName("img")[0];
fetch(`https://xkcd.now.sh/?comic=latest`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    img.setAttribute("src", data.img);
  });
