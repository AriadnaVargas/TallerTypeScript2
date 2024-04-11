var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, sinopsis, link, img) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.sinopsis = sinopsis;
        this.link = link;
        this.img = img;
    }
    Serie.prototype.darPromedio = function (series) {
        var promedio = 0;
        for (var index = 0; index < series.length; index++) {
            promedio += series[index].seasons;
        }
        promedio = promedio / series.length;
        return promedio;
    };
    return Serie;
}());
export { Serie };
