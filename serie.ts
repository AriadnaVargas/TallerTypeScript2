export class Serie{

    constructor(
        public id: number,
        public name: string,
        public channel: string,
        public seasons: number,
        public sinopsis:string,
        public link: string,
        public img: string,){

        }

    public darPromedio(series: Serie[]):number{
        let promedio:number=0;
        for (let index=0; index<series.length; index++){
            promedio+=series[index].seasons;
        
        }
        promedio=promedio/series.length;
        return promedio;
    }
}