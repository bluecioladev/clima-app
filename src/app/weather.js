export class Weather {
    constructor(city, countryCode) {

        this.apikey = '16ec2de971bc8c9744f296c16f76be8a';
        this.city = city;
        this.countryCode = countryCode;

    }
    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;

       const response = await fetch(URI);
       const data =await response.json();



       return data;
    }

    changeLocation(city ,countryCodde){
        this.city = city;
        this.countryCode= countryCodde;
    }
}