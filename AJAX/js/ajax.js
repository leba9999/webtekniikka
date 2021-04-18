'use strict';

const apiurl = "http://api.tvmaze.com/search/shows?q=";

let apiKysely;

// Etsitään HTML-sivulta tarvittavat komponentit id:n avulla.
const hakunappi = document.getElementById("hakunappi");
if (hakunappi == null) {
    console.log("Debug: VOIH, hakunappia ei löytynyt...")
} else {
    console.log("Debug: hakunappi löytyi!");
}

let mainElementti = document.querySelector("main");
let hakuteksti = document.getElementById("hakuteksti");

// lisätään napille tapahtumankäsittelijä

hakunappi.addEventListener('click', {handleEvent:teeKysely});
hakuteksti.addEventListener("keyup", {handleEvent: function(event) {
    if (event.keyCode === 13) {
        teeKysely();
    }
}});
hakuteksti.value = "star";
teeKysely();
hakuteksti.value = "";
// Funktio muodostaa hakukyselyn.
// Lopuksi funktio kutsuu teeHaku() funktiota.
function teeKysely() {

    let hakusana = hakuteksti.value;
    apiKysely = apiurl + hakusana + ";";
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


// Funktio hoitaa kyselystä saadun json-datan käsittelyn.
// Funktio saa parametrina json-muodossa olevan datan.
function naytaVastaus(jsonData) {
    const childs = document.querySelectorAll("article");
    for (let i = 0; i< childs.length; i++) {
        mainElementti.removeChild(childs[i]);
    }
    for (let i = 0; i< jsonData.length; i++){
        let image, url, summary, status, networkname, networkcountrycode, name, rating;
        let language, premiered;
        let genres = [];
        try{
            if (jsonData[i].show.image == null || jsonData[i].show.image.medium == null){
                throw "image not found!";
            }
            image = jsonData[i].show.image.medium;
        }catch (error){
            console.error(error);
            image = "img/notfound.jpg";
        }
        try{
            if (jsonData[i].show.name == null){
                throw "name not found!";
            }
            name = jsonData[i].show.name;
        }catch (error){
            console.error(error);
            name = "unknown";
        }
        try{
            if (jsonData[i].show.summary == null){
                throw "summary not found!";
            }
            summary = jsonData[i].show.summary;
        }catch (error){
            console.error(error);
            summary = "Not found!";
        }
        try{
            if (jsonData[i].show.network == null){
                throw "network not found!";
            }
            if (jsonData[i].show.network.name == null){
                throw "network name not found!";
            }
            try{
                if (jsonData[i].show.network.country == null){
                    throw "country not found!";
                }
                if (jsonData[i].show.network.country.code == null){
                    throw "country code not found!";
                }
                networkcountrycode = "(" + jsonData[i].show.network.country.code + ")";
            }catch (error){
                console.error(error);
                networkcountrycode = "N/A";
            }
            networkname = jsonData[i].show.network.name;
        }catch (error){
            console.error(error);
            networkname = "N/A";
            networkcountrycode = "";
        }
        try{
            if (jsonData[i].show.status == null){
                throw "status unknown!";
            }
            status =jsonData[i].show.status;
        }catch (error){
            console.error(error);
            status = "N/A";
        }
        try{
            if (jsonData[i].show.rating == null){
                throw "rating unknown!";
            }
            if (jsonData[i].show.rating.average == null){
                throw "rating unknown!";
            }
            rating = jsonData[i].show.rating.average + "/" + 10;
        }catch (error){
            console.error(error);
            rating = "N/A";
        }
        try{
            if (jsonData[i].show.genres == null || jsonData[i].show.genres.length <= 0){
                throw "genre unknown!";
            }
            genres = jsonData[i].show.genres;

        }catch (error){
            console.error(error);
            genres[0] = "N/A";
        }
        const a = document.createElement("a");
        try{
            if (jsonData[i].show.officialSite == null){
                throw "officialSite unknown!";
            }
            url = jsonData[i].show.officialSite;
            a.innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
        }catch (error){
            console.error(error);
            url = "N/A";
            a.innerHTML = `<a>${url}</a>`;
        }
        try{
            if (jsonData[i].show.language == null){
                throw "language unknown!";
            }
            language = jsonData[i].show.language;
        }catch (error){
            console.error(error);
            language = "N/A";
        }
        try{
            if (jsonData[i].show.premiered == null){
                throw "premiered unknown!";
            }
            premiered = jsonData[i].show.premiered;
        }catch (error){
            console.error(error);
            premiered = "N/A";
        }
        const article = document.createElement("article");
        article.innerHTML += `
                <div class="container">
                    <img src="${image}" alt="shows cover image">
                <div class="infobox">
                    <h2 >${name}</h2>
                    <ul>
                        <li>Kieli: ${language}</li>
                        <li>Kanava: ${networkname} ${networkcountrycode}
                        <li>Tila: ${status}</li>
                        <li>Ensi-ilta: ${premiered}</li>
                        <li>Genre: ${genres}</li>
                        <li>Kotisivu: ${a.innerHTML}</li>
                        <br>
                        <li>Arvio: ${rating}</li>
                    </ul>
                </div>
                </div>
                    <div class="divider">
                        <h3>Kuvaus:</h3>
                        <div class="textbox">
                            ${summary}
                        </div>
                    </div>
        `;
        mainElementti.appendChild(article);
    }
}


