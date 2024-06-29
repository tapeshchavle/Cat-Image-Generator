let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let pr = fetch("https://api.thecatapi.com/v1/images/search");
  pr.then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  })
    .then((result) => {
      let img = document.querySelector("img");
      let i = 0;
      let imgpath = result[0].url;
      console.log(imgpath);
      img.src = imgpath;
    })
    .catch((error) => {
      console.log(error);
    });
  let img = document.querySelector("img");
  img.onmouseover = () => {
    img.classList.add("myimg");
  };
});
