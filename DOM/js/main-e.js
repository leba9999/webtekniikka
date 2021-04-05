'use strict';
const picArray = [
  {
    title: 'Otsikko 1',
    caption: 'Caption 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    filename: 'img/pic1.jpg',
  },
  {
    title: 'Otsikko 2',
    caption: 'Caption 2',
    description: 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    filename: 'img/pic2.jpg',
  },
  {
    title: 'Otsikko 3',
    caption: 'Caption 3',
    description: 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    filename: 'img/pic3.jpg',
  },
  {
    title: 'Otsikko 4',
    caption: 'Caption 4',
    description: 'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    filename: 'img/pic4.jpg',
  },
  {

    title: 'Otsikko 5',
    caption: 'Caption 5',
    description: 'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    filename: 'img/pic5.jpg',
  },
  {
    title: 'Otsikko 6',
    caption: 'Caption 6',
    description: 'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    filename: 'img/pic6.jpg',
  }, {
    title: 'Otsikko 7',
    caption: 'Caption 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    filename: 'img/pic7.jpg',
  },
  {
    title: 'Otsikko 8',
    caption: 'Caption 8',
    description: 'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    filename: 'img/pic8.jpg',
  },
  {
    title: 'Otsikko 9',
    caption: 'Caption 9',
    description: 'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    filename: 'img/pic9.jpg',
  },
];

// Put code of task E here

const main = document.querySelector("main");

for (let i = 0; i < picArray.length; i++){
  const article = document.createElement("article");
  const header = document.createElement("header");
  const h2 = document.createElement("h2");
  const figure = document.createElement("figure");
  const image = document.createElement("img");
  const p = document.createElement("p");
  const figcaption = document.createElement("figcaption");

  image.src = picArray[i].filename;
  image.alt = picArray[i].caption;
  figcaption.innerText =  picArray[i].caption;
  h2.innerText = picArray[i].title;
  p.innerText = picArray[i].description;

  header.appendChild(h2);
  figure.appendChild(image);
  figure.appendChild(figcaption);
  article.appendChild(header);
  article.appendChild(figure);
  article.appendChild(p);
  main.appendChild(article);
}