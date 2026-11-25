export default class Countdown{
    constructor(futureDate){
        this.futureDate = futureDate;
    }
    get _actualDate(){
        return new Date();
    }
    get _futureDate(){
        return new Date(this.futureDate);
    }
    get _timeStampDiff(){
        return this._futureDate.getTime() - this._actualDate.getTime();
    }
    get days(){
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
    }
    get hours(){
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
    }
    get minutes(){
        return Math.floor(this._timeStampDiff / (60 * 1000));
    }
    get seconds(){
        return Math.floor(this._timeStampDiff / 1000);
    }
    get total(){//objeto para mostrar o tempo completo total
        const days = this.days;
        const hours = this.hours % 24;//me da o restante que no caso são as horas que faltam
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        return{
            days,
            hours,
            minutes,
            seconds
        }
    }
};


