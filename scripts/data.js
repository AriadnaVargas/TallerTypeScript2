import { Serie } from "./serie.js";
export var serie = new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg");
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "breakingbad.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "ob.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "got.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "bbt.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "sherlock.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "aves.jpg"),
];
var seriesTable = document.getElementById("series");
var promedioTable = document.getElementById("promedio");
mostrarSeries(series);
mostrarPromedio(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var index = 0;
    var _loop_1 = function (serie_1) {
        var serieTr = document.createElement("tr");
        serieTr.style.borderBottom = "1px solid #ddd";
        serieTr.addEventListener('click', function () {
            document.getElementById('details').innerHTML = "\n                <img class=\"card-img-top\" src=\"./img/".concat(serie_1.img, "\" height= 150 width=250 alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">").concat(serie_1.name, "</h5>\n                    <p class=\"card-text\">").concat(serie_1.sinopsis, "</p>\n                    <a href=\"").concat(serie_1.link, "\" class=\"btn btn-primary\">").concat(serie_1.link, "</a>\n                </div>\n            ");
        });
        var serieTh = document.createElement("th");
        serieTh.setAttribute("scope", "row");
        serieTh.textContent = serie_1.id.toString();
        serieTr.appendChild(serieTh);
        serieTr.innerHTML = "\n        <td>".concat(serie_1.id, "</td>\n        <td>").concat(serie_1.name, "</td>\n        <td>").concat(serie_1.channel, "</td>\n        <td>").concat(serie_1.seasons, "</td>\n        ");
        seriesTbody.appendChild(serieTr);
        index++;
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie_1 = series_1[_i];
        _loop_1(serie_1);
    }
    seriesTable.appendChild(seriesTbody);
}
function mostrarPromedio(series) {
    var promedioTr = document.createElement("tr");
    var promedio = serie.darPromedio(series);
    promedioTr.innerHTML = "<td>Promedio de Temporadas:</td><td>".concat(promedio, "</td>");
    promedioTable.appendChild(promedioTr);
}
