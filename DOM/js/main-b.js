// Put code of task B here

'use strict'

const main = document.querySelector("main");

const html =
    `<article>
            <header>
                <h2>Article header 2</h2>
            </header>
            <figure>
                <img src="http://placekitten.com/320/100" alt="kissa">
                    <figcaption>Kuva kissasta</figcaption>
            </figure>
            <p>Javascriptillä lisätty artikkeli.</p>
        </article>`;

if (main != null){
    main.innerHTML += html;
} else {
    console.error(`[main-b.js]: main tag is null...`);
}