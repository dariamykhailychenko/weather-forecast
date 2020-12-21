import axios from "axios";

export const getCityFetch = async (city) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5d66eac57ef082cc9082a1d2982e76bc`);
    return data;
}

export const getSearchResultsFetch = async (cityName) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&appid=5d66eac57ef082cc9082a1d2982e76bc`);
    return data;
}

export const getCityByIdFetch = async (cityId) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=5d66eac57ef082cc9082a1d2982e76bc`);
    return data;
}

export const getWeatherChartFetch = async (lat, lon) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&&appid=5d66eac57ef082cc9082a1d2982e76bc`);
    return data;
}

