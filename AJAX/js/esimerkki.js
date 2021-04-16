'use strict';

/*
	Javascript-tiedosto AJAX-tehtäviä varten.
	Jos etsitään TV-sarjoja haulla "girls", niin TV Maze APIsta suoritettava hakuosoite on:
	http://api.tvmaze.com/search/shows?q=girls
	Testaa haun toimintaa omassa selaimessa.
	Kun koodi toimii, niin poista turhat open höpinät.
*/

// hakuosoitteen vakio-osa.
const apiurl = "http://api.tvmaze.com/search/shows?q=";

// lopullinen hakukysely, joka lähetetään nettiin.
let apiKysely;

// Etsitään HTML-sivulta tarvittavat komponentit id:n avulla.
const hakunappi = document.getElementById("hakunappi");
if (hakunappi == null) {
    console.log("Debug: VOIH, hakunappia ei löytynyt...")
} else {
    console.log("Debug: hakunappi löytyi!");
}
// TODO: etsi html-sivulta komponentti, johon tuloksien pitäisi ilmestyä.

let mainElementti = document.querySelector("main");
let hakuteksti = document.getElementById("hakuteksti");

// lisätään napille tapahtumankäsittelijä
hakunappi.addEventListener('click', teeKysely);

// Funktio muodostaa hakukyselyn.
// Lopuksi funktio kutsuu teeHaku() funktiota.
function teeKysely() {
    // TODO: haetaan html-sivulta käyttäjän antama hakuteksti (muista .value)
    // TODO: poista siis tuo alla oleva kovakoodaus!

    let hakusana = hakuteksti.value;
    // muodostetaan ja tulostetaan konsoliin lopullinen hakukysely
    apiKysely = apiurl + hakusana;
    console.log("Lähetettävä kysely: " + apiKysely);

    // kutsutaan fetch-jutut hoitavaa funktiota
    teeHaku(apiKysely);        // parametrina hakulause
}

// Idea: tämä fetch-osa säilyy yleensä samana.
// Funktio saa parametrina hakulauseen.
function teeHaku(apiKysely)  {

    // suoritetaan hakukysely, fetch hoitaa mahdolliset tietoliikenneongelmat.
    fetch(apiKysely).then(function(response) {
        return response.json();
    }).then(function(json) {
        naytaVastaus(json);				// siirrytään varsinaisen datan käsittelyyn.
    });
};


// Funktio hoitaa kyselystä saadun json-datan käsittelyn.
// Funktio saa parametrina json-muodossa olevan datan.
function naytaVastaus(jsonData) {
    /*
        Aha, json-dataoliot ovat siis taulukossa.
        Yksi dataolio sisältää yhden sarjan tiedot.
        Eihän ope nyt kaikkia saa tulostettua...
		    Kokeilen eka hakutuloksen kanssa...
        // TODO: tulosta kaikkien sarjojen tiedot.
    */

    // AJAX-tehtävän vaihe 1 on suoritettu, jos alla oleva koodi
    // tulostaa konsoliin noin 10 sarjan tiedot (Array, jonka koko on 10).
    console.log("json sellaisenaan");
    console.log(jsonData);
    console.log("Sellainen se json oli.");

    // harjoittelua konsoliin ennen web-sivulle tulostusta.
    console.log("Hakutuloksia löytyi: " + Object.keys(jsonData).length + " kpl.");
    console.log("Length kertoo: " + jsonData.length);

    // json-datan rakenne riipuu aina datan tarjoajasta.
    // Mistä nyt mikin data löytyy: se on katsottu TVMazen rajapinnan kuvauksesta.
    // TODO: etsi API kuvauksesta, että mistä haluttu data löytyy.

    // Tulostan nyt muutaman tiedon eka sarjasta eli taulukon eka alkiosta (jsonData[0]).
    let nimi = jsonData[0].show.name;
    console.log("Check: eka sarjan nimi: " + nimi + "<br>");
    console.log("Check: eka sarjan kuvien url löytyy show.image alta");
    console.log(`${jsonData[0].show.rating.average}`);


    // TODO: kerää tarvittava data ja tulosta se web-sivulle.
    // Valmistellaan html-sivulle tuleva koodi.
    for (let i = 0; i< jsonData.length; i++){
        mainElementti.innerHTML += `
            <article>
                <h2>${jsonData[i].show.name}</h2>
                <img src="${jsonData[i].show.image.medium}">
                <h4>${jsonData[i].show.name}</h4>
                <ul>
                    <li>Kanava: ${jsonData[i].show.network.name} (${jsonData[i].show.network.country.code})
                    <li>Tila: ${jsonData[i].show.status}</li>
                    <li>Genre: ${jsonData[i].show.genres[0]}</li>
                    <li>Kotisivu: <a href="${jsonData[i].show.officialSite}" target="_blank">${jsonData[i].show.network.name}</a></li>
                    <br>
                    <li>Arvio: ${jsonData[i].show.rating.average}/10</li>
                </ul>
            </article>
        `;
    }
}



