import ActionTypes from './actionTypes';

const initialState = () => {
    return (
        {
            cityList: [],
            searchList: [],
            selectedCity: {}
        }
    );
}

const cityReducer = (state = initialState(), action) => {
    switch (action.type) {
        case ActionTypes.GET_CITIES:
            return {
                ...state,
                cityList: action.payload,
            }
        case ActionTypes.GET_CITIES_SEARCH_RESULT:
            return {
                ...state,
                searchList: action.payload
            }
        case ActionTypes.ADD_CITY:
            return {
                ...state,
                cityList: addCity(state.cityList, action.payload),
                searchList: []
            }
        case ActionTypes.GET_SELECTED_CITY:
            return {
                ...state,
                selectedCity: action.payload
            }
        case ActionTypes.UPDATE_CITY:
            return {
                ...state,
                cityList: updateCity(state.cityList, action.payload)
            }
        case ActionTypes.DELETE_CITY:
            return {
                ...state,
                cityList: deleteCity(state.cityList, action.payload)
            }
        default:
            return state;   
    }
}

const updateCity = (cityArr, updatedCity) => {
    let newCityArr = [...cityArr];
    for (let i = 0; i < newCityArr.length; i++) {
        if (newCityArr[i].id === updatedCity.id) {
            newCityArr[i] = updatedCity;
            break;
        }
    }
    return newCityArr;
}

const addCity = (cityArr, newCity) => {
    let newCityArr = [...cityArr];
    if (newCity) {
        newCityArr.push(newCity);
    }
    return newCityArr;    
}

const deleteCity = (cityArr, deleteCityId) => {
    let updatedCityArr = [...cityArr];
    let deleteCity = updatedCityArr.find(city => city.id === deleteCityId);
    let deleteIndex = updatedCityArr.indexOf(deleteCity);
    updatedCityArr.splice(deleteIndex, 1);
    return updatedCityArr;    
}

export default cityReducer;