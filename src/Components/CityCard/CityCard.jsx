import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deleteCityThunk, updateCityThunk} from '../../store/general/thunks';
import {Close, Update} from '../Icons/Icons';
import './CityCard.css';

const CityCard = ({city}) => {
    let cityLink = `/city/${city.id}`;

    let cityName = '';
    let temp = '';
    let description = '';
    if (city && city.main) {
        cityName = city.name;
        temp = Math.round(city.main.temp);
        description = city.weather[0].description;
    }

    const dispatch = useDispatch();
    const deleteCard = (value) => {
        dispatch(deleteCityThunk(value));
    }
    const updateCard = (value) => {
        console.log(value);
        dispatch(updateCityThunk(value));
    }

    return (
        <div className='card'>
            <div className='icon-update' onClick={() => updateCard(city.id)}>
                <i>
                    <Update/>
                </i>
            </div>
            <div className='icon-close' onClick={() => deleteCard(city.id)}>
                <i>
                    <Close/>
                </i>
            </div>
            <Link to={cityLink}>
                <h3 className='city-​​name'>{cityName}</h3>
            </Link>
            <div className='temperature'>{temp} <span>&deg;C</span></div>
            <div className='description'>{description}</div>
        </div>
    );
}

export default CityCard;