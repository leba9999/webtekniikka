const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];
const ulist = document.querySelector("ul");
const bigimage = document.querySelector("img");
const div = document.querySelector("div");
const meta = document.querySelector("meta");

meta.innerHTML += `<link  rel="stylesheet" href="css/style.css">`;

for (let i = 0; i < pics.length; i++){
  let initimage = `<img id="kuva${i}" src=${pics[i].thumb} alt="kuva ${i}">`;
  console.log(initimage);
  ulist.innerHTML += `<li>${initimage}</li>`;
}
const images = document.querySelectorAll("img");

bigimage.addEventListener("click", function (){
  div.className = "hidden";
});
for (let i = 0; i < images.length; i++)
  images[i].addEventListener("click", showimage);

function showimage(evt){
  for (let i = 0; i < images.length; i++){
    if (evt.target.id == `kuva${i}`){
      bigimage.src = pics[i].big;
      div.className = "visible";
    }
  }
}