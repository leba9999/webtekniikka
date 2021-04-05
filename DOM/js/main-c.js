// Put code of task C here

'use strict'

// Etsitään main-tagi
const main = document.querySelector("main");

// Luodaan tarvittavat elementit
const article = document.createElement("article");
const header = document.createElement("header");
const h2 = document.createElement("h2");
const figure = document.createElement("figure");
// Luodaan kuva elementti
const image = document.createElement("img");
// Luodaan paragraph elementti
const p = document.createElement("p");
// Annetaan elementille arvoja src ja alt teksti
image.src = "http://placekitten.com/320/110";
image.alt = "Kissa";
// lisätään tekstiä otsikolle
h2.innerText = "Article header 2";
// lisätään tekstiä paragraphille
p.innerText = "Javascriptillä lisätty artikkeli.";

// Lisätään headerille otsikko lapsi
header.appendChild(h2);
// lisätään figurelle kuva lapsi
figure.appendChild(image);
// lisätään artikelille kaikki lapset
article.appendChild(header);
article.appendChild(figure);
article.appendChild(p);
// lisätään main tagille artikkeli lapsi joka sisältää kaikki muut elementit
main.appendChild(article);