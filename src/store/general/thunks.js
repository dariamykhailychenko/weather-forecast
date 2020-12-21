import { 
    getSearchResultsFetch, 
    getCityByIdFetch,
    getWeatherChartFetch
} from '../../Api/api';
import {
    updateCitiesAction as getCitiesAction, 
    getCitiesSearchResultsAction, 
    addCityAction,
    getSelectedCityAction,
    updateCityAction,
    deleteCityAction
} from './actions';

export const getCitiesByNameSearchThunk = (cityName) => {
    return async (dispatch) => {
        try {
            const {list} = await getSearchResultsFetch(cityName);
            dispatch(getCitiesSearchResultsAction(list));
        }
        catch(e) {
            console.log(e);
        }
    }
}

export const addCityThunk = (city) => {
    return async (dispatch) => {
        try {
            const selectedCity = await getCityByIdFetch(city);
            let cities = localStorage.getItem('cities');
            if (!cities) {
                cities = [];
            } else {
                cities = JSON.parse(cities);
            }
            cities.push(selectedCity.id);
            localStorage.setItem('cities', JSON.stringify(cities));
            dispatch(addCityAction(selectedCity));
        }
        catch(e) {
            console.log(e);
        }
    }
}

export const getAllCitiesThunk = () => {
    return async (dispatch) => {
        try {
            let cities = localStorage.getItem('cities'); 
            let citiesArr = JSON.parse(cities);
            let cityArr = [];
            for(let i = 0; i < citiesArr.length; i++){
                let city = citiesArr[i];
                const selectedCity = await getCityByIdFetch(city);
                cityArr.push(selectedCity);
            }
            dispatch(getCitiesAction(cityArr));
        }
        catch(e) {
            console.log(e);
        }
    }
}

export const getSelectedCityThunk = (cityId) => {
    return async (dispatch) => {
        try {
            const {coord, name} = await getCityByIdFetch(cityId);
            const selectedCity = await getWeatherChartFetch(coord.lat, coord.lon);
            selectedCity.name = name; 
            dispatch(getSelectedCityAction(selectedCity));
        }
        catch(e) {
            console.log(e);
        }
    }
}

export const deleteCityThunk = (cityId) => {
    return async (dispatch) => {
        try {
            let cities = localStorage.getItem('cities'); 
            let citiesArr =  JSON.parse(cities);
            let deleteIndex = citiesArr.indexOf(cityId);
            citiesArr.splice(deleteIndex, 1);
            localStorage.setItem('cities', JSON.stringify(citiesArr));
            dispatch(deleteCityAction(cityId));
        }
        catch(e) {
            console.log(e);
        }
    }
}

export const updateCityThunk = (cityId) => {
    return async (dispatch) => {
        try {
            const selectedCity = await getCityByIdFetch(cityId);
            dispatch(updateCityAction(selectedCity));
        }
        catch(e) {
            console.log(e);
        }
    }
}