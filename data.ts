import {Serie} from "./serie.js"

export const serie =new Serie(1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer","https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpg") ;

export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","breakingbad.jpg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","ob.jpg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
    "got.jpg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "bbt.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "sherlock.jpg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "aves.jpg"),
];

let seriesTable:HTMLElement=document.getElementById("series")!;
let promedioTable:HTMLElement=document.getElementById("promedio")!;

mostrarSeries(series);
mostrarPromedio(series);

function mostrarSeries(series:Serie[]):void{

    let seriesTbody:HTMLElement=document.createElement("tbody");
    let index:number=0;
    for (let serie of series){
        
        let serieTr:HTMLElement=document.createElement("tr");
        serieTr.style.borderBottom = "1px solid #ddd";

        serieTr.addEventListener('click', function() {
            document.getElementById('details')!.innerHTML = `
                <img class="card-img-top" src="./img/${serie.img}" height= 150 width=250 alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.sinopsis}</p>
                    <a href="${serie.link}" class="btn btn-primary">${serie.link}</a>
                </div>
            `;
        });

        let serieTh:HTMLElement=document.createElement("th");
        serieTh.setAttribute("scope","row");
        serieTh.textContent=serie.id.toString();
        serieTr.appendChild(serieTh);

        serieTr.innerHTML=`
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
        `;
        
        seriesTbody.appendChild(serieTr);
        index++;
    }
    seriesTable.appendChild(seriesTbody);

}
function mostrarPromedio(series:Serie[]):void{
    let promedioTr:HTMLElement=document.createElement("tr");
    let promedio:number=serie.darPromedio(series);
    promedioTr.innerHTML=`<td>Promedio de Temporadas:</td><td>${promedio}</td>`;
    promedioTable.appendChild(promedioTr);

}