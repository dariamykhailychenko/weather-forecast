import React, {useEffect}  from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getSelectedCityThunk} from '../../store/general/thunks';
import {getSelectedCitySelector} from '../../store/general/selectors';
import Header from '../Header';
import {BarChart, Bar} from 'recharts';
import './City.css';

const City = ({match}) => {
    const {cityId} = match.params;
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSelectedCityThunk(cityId));
    }, [dispatch, cityId]);

    let selectedCity = useSelector(getSelectedCitySelector);
    let name = '';
    let uvi ='';
    let temperature = '';
    let feelTemp = '';
    let minTemp = '';
    let maxTemp = '';
    let wind = '';
    let clouds = '';

    const getDailyTemp = (daily, border) => {
        if (daily && daily.length > 0) {
            let dailyInfo = daily[0];
            return dailyInfo['temp'] ? dailyInfo['temp'][border] : 0;
        }
        return 0;
    }
    if(selectedCity && selectedCity.current) {
        name = selectedCity.name;
        uvi = Math.round(selectedCity.current.uvi);
        temperature = Math.round(selectedCity.current['temp']);
        feelTemp = Math.round(selectedCity.current['feels_like']);
        minTemp = Math.round(getDailyTemp(selectedCity.daily, 'min'));
        maxTemp = Math.round(getDailyTemp(selectedCity.daily, 'max'));
        wind = Math.round(selectedCity.current['wind_speed']);
        clouds = Math.round(selectedCity.current.clouds);
    } 

    let tempCity = [];
    if(selectedCity && selectedCity.daily){
        tempCity = selectedCity.hourly.slice(0, 8).map(function(element) { return { 'temp' : Math.round(element.temp)}});
    }

    const getDate = () => {
        let data = new Date();
        let month = data.getMonth();
        let day = data.getDate();

        switch (month) {
            case 0: month='January'; break;
            case 1: month='February'; break;
            case 2: month='March'; break;
            case 3: month='April'; break;
            case 4: month='May'; break;
            case 5: month='June'; break;
            case 6: month='July'; break;
            case 7: month='August'; break;
            case 8: month='September'; break;
            case 9: month='October'; break;
            case 10: month='November'; break;
            case 11: month='December'; break;
            default: month='';
        }
        
        return day + ' ' + month;
    }

    return (
        <>
            <Header name={name}/>
            <div className='city'>
                <div className='city-block'>
                    <div className='temperature-block'>
                        <div className='date'>{getDate()}</div>
                        <div className='temperature'>{temperature} <span>&deg;C</span></div>
                        <div>max. {maxTemp} <span>&deg;C</span>, min. {minTemp} <span>&deg;C</span></div>
                        <div className='chart-block'>
                            <BarChart width={350} height={100} data={tempCity}
                                      margin={{top: 20, right: 30, left: 20, bottom: 20}}
                            >
                                <Bar dataKey='temp' fill='#1e1594' label={{ position: 'top' }}/>
                            </BarChart>
                        </div>
                    </div>
                    <div className='description-block'>
                        <div className='subblock'>UV-Index <span className='item'>{uvi}</span></div>
                        <div className='subblock'>Feels Like <span className='item'>{feelTemp} &deg;C</span></div>
                        <div className='subblock'>Wind <span className='item'>{wind} m/s</span></div>
                        <div className='subblock'>Clouds <span className='item'>{clouds}</span></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default City;