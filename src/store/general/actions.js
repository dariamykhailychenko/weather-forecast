import ActionTypes from './actionTypes';

export const updateCitiesAction = (city) => {
    return {
        type: ActionTypes.GET_CITIES,
        payload: city
    }
}

export const getCitiesSearchResultsAction = (cities) => {
    return {
        type: ActionTypes.GET_CITIES_SEARCH_RESULT,
        payload: cities
    }
}

export const addCityAction = (city) => {
    return {
        type: ActionTypes.ADD_CITY,
        payload: city
    }
}

export const getSelectedCityAction = (city) => {
    return {
        type: ActionTypes.GET_SELECTED_CITY,
        payload: city
    }
}

export const updateCityAction = (city) => {
    return {
        type: ActionTypes.UPDATE_CITY,
        payload: city
    }
}

export const deleteCityAction = (city) => {
    return {
        type: ActionTypes.DELETE_CITY,
        payload: city
    }
}