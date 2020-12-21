export const cityStateSelector = state => state.city;

export const getSearchResultsSelector = state => cityStateSelector(state).searchList;

export const getAllCitiesSelector = state => cityStateSelector(state).cityList;

export const getSelectedCitySelector = state => cityStateSelector(state).selectedCity;
