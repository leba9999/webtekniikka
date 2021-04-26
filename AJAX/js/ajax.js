'use strict';

let showData = {
    name: "",
    image: "",
    url: "",
    summary: "",
    status: "",
    networkName: "",
    networkcountrycode: "",
    rating: "",
    language: "",
    premiered: "",
    genres: [""]
};

const apiurl = "http://api.tvmaze.com/search/shows?q=";

const a = document.createElement("a");

let mainElementti = document.querySelector("main");
let hakuteksti = document.getElementById("hakuteksti");

// Etsitään HTML-sivulta tarvittavat komponentit id:n avulla.
const hakunappi = document.getElementById("hakunappi");

if (hakunappi == null) {
    console.log("Debug: VOIH, hakunappia ei löytynyt...")
} else {
    console.log("Debug: hakunappi löytyi!");
}


// lisätään napille tapahtumankäsittelijä

hakunappi.addEventListener('click', {handleEvent: function(event) {
        teeKysely(hakuteksti.value);
    }});
hakuteksti.addEventListener("keyup", {handleEvent: function(event) {
    if (event.keyCode === 13) {
        teeKysely(hakuteksti.value);
    }
}});

teeKysely("star");

// Funktio muodostaa hakukyselyn.
// Lopuksi funktio kutsuu teeHaku() funktiota.
function teeKysely(search) {
    // puolipiste (;) jostain syystä mahdollistaa haun sanalle "the"
    let apiKysely = apiurl + search + ";";
    console.log("Lähetettävä kysely: " + apiKysely);
    teeHaku(apiKysely);
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
}
// Poistetaan main elementistä halutut lapset
function removeChilds(child){
    // haetaan documentista kaikki lapset. esim: article
    const childs = document.querySelectorAll(child);
    // poistetaan lapset
    for (let i = 0; i< childs.length; i++) {
        mainElementti.removeChild(childs[i]);
    }
}

// Funktio hoitaa kyselystä saadun json-datan käsittelyn.
// Funktio saa parametrina json-muodossa olevan datan.
function naytaVastaus(jsonData) {
    // Etsitään turhat article childit ja poistetaan ne
    removeChilds("article");
    for (let i = 0; i< jsonData.length; i++){
        // Etsitään kaikki mahdolliset virheet jsonDatasta
        handleDataErrors(jsonData[i]);

        const article = document.createElement("article");
        article.innerHTML += `
                <div class="container">
                    <img src="${showData.image}" alt="shows cover image">
                <div class="infobox">
                    <h2 >${showData.name}</h2>
                    <ul>
                        <li>Kieli: ${showData.language}</li>
                        <li>Kanava: ${showData.networkname} ${showData.networkcountrycode}
                        <li>Tila: ${showData.status}</li>
                        <li>Ensi-ilta: ${showData.premiered}</li>
                        <li>Genre: ${showData.genres}</li>
                        <li>Kotisivu: ${a.innerHTML}</li>
                        <br>
                        <li>Arvio: ${showData.rating}</li>
                    </ul>
                </div>
                </div>
                    <div class="divider">
                        <h3>Kuvaus:</h3>
                        <div class="textbox">
                            ${showData.summary}
                        </div>
                    </div>
        `;
        mainElementti.appendChild(article);
    }
}
// Etsitään kaikki mahdolliset onglema kohdat jsonDatasta
// ja korvataan niiden tiedot toimivilla tiedoilla
function handleDataErrors(jsonData){
    // Show name
    try{
        if (jsonData.show.name == null){
            throw "name not found!";
        }
        showData.name = jsonData.show.name;
    }catch (error){
        console.error(error);
        showData.name = "unknown";
    }
    // Cover image
    try{
        if (jsonData.show.image == null || jsonData.show.image.medium == null){
            throw "image not found!";
        }
        showData.image = jsonData.show.image.medium;
    }catch (error){
        console.error(showData.name + ": " + error);
        showData.image = "img/notfound.jpg";
    }
    // Show summary
    try{
        if (jsonData.show.summary == null){
            throw "summary not found!";
        }
        showData.summary = jsonData.show.summary;
    }catch (error){
        console.error(showData.name + ": " + error);
        showData.summary = "Not found!";
    }
    // Show network ja country code
    try{
        if (jsonData.show.network == null){
            throw "network not found!";
        }
        if (jsonData.show.network.name == null){
            throw "network name not found!";
        }
        try{
            if (jsonData.show.network.country == null){
                throw "country not found!";
            }
            if (jsonData.show.network.country.code == null){
                throw "country code not found!";
            }
            showData.networkcountrycode = "(" + jsonData.show.network.country.code + ")";
        }catch (error){
            console.error(showData.name + ": " + error);
            showData.networkcountrycode = "N/A";
        }
        showData.networkname = jsonData.show.network.name;
    }catch (error){
        console.error(showData.name + ": " + error);
        showData.networkname = "N/A";
        showData.networkcountrycode = "";
    }
    // Show status
    try{
        if (jsonData.show.status == null){
            throw "status unknown!";
        }
        showData.status =jsonData.show.status;
    }catch (error){
        console.error(showData.name + ": " + error);
        showData.status = "N/A";
    }
    // Show rating
    try{
        if (jsonData.show.rating == null){
            throw "rating unknown!";
        }
        if (jsonData.show.rating.average == null){
            throw "rating unknown!";
        }
        showData.rating = jsonData.show.rating.average + "/" + 10;
    }catch (error){
        console.error(showData.name + ": " + error);
        showData.rating = "N/A";
    }
    // Show genres
    try{
        if (jsonData.show.genres == null || jsonData.show.genres.length <= 0){
            throw "genre unknown!";
        }
        showData.genres = jsonData.show.genres;

    }catch (error){
        console.error(showData.name + ": " + error);
        showData.genres[0] = "N/A";
    }
    // Show website
    try{
        if (jsonData.show.officialSite == null){
            throw "officialSite unknown!";
        }
        showData.url = jsonData.show.officialSite;
        a.innerHTML = `<a href="${showData.url}" target="_blank">${showData.url}</a>`;
    }catch (error){
        console.error(showData.name + ": " + error);
        showData.url = "N/A";
        a.innerHTML = `<a>${showData.url}</a>`;
    }
    // Show language
    try{
        if (jsonData.show.language == null){
            throw "language unknown!";
        }
        showData.language = jsonData.show.language;
    }catch (error){
        console.error(showData.name + ": " + error);
        showData.language = "N/A";
    }
    // Show premier
    try{
        if (jsonData.show.premiered == null){
            throw "premiered unknown!";
        }
        showData.premiered = jsonData.show.premiered;
    }catch (error){
        console.error(showData.name + ": " + error);
        showData.premiered = "N/A";
    }
}


