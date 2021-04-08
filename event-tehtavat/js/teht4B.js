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

// Haetaan tagit
const ulist = document.querySelector("ul");
const bigimage = document.querySelector("img");
const div = document.querySelector("div");
const meta = document.querySelector("meta");

// luodaan link jolla haetaan haluttu css tiedosto
const link = document.createElement("link");
link.href = "css/style.css";
link.rel = "stylesheet";

// liitetään link meta osioon appendChild:lla
meta.appendChild(link);

// Käydään kaikki pics tiedot läpi
for (let i = 0; i < pics.length; i++){

  // luodaan img ja li elementit
  const initimage = document.createElement("img");
  const li = document.createElement("li");

  // asetetaan kuvan tiedot
  initimage.src = pics[i].thumb;
  initimage.id = `kuva${i}`;
  initimage.alt =`kuva ${i}`;

  // liitetään kuva li
  li.appendChild(initimage);

  // li liitetään ul listaan
  ulist.appendChild(li);
}
// haetaan kaikki kuvat
const images = document.querySelectorAll("img");

// annetaan kaikille kuva elementeille Eventlisteneri
for (let i = 0; i < images.length; i++)
  images[i].addEventListener("click", showimage);

// asetetaan isolle kuvalle oma kuuntelija joka piilottaa kuvan vaihtamalla css classia
bigimage.addEventListener("click", function (){
  div.className = "hidden";
});

function showimage(evt){

  // käydään kuvat läpi ja tarkistetaan sopiiko jonkun kuvan id evt.target id kanssa
  // jos sopii asetetaan isolle kuvalle kyseinen kuva
  for (let i = 0; i < images.length; i++){
    if (evt.target.id == `kuva${i}`){
      bigimage.src = pics[i].big;
      div.className = "visible";
    }
  }
}