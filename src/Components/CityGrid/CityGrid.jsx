import React, {useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import CityCard from '../CityCard';
import {getAllCitiesThunk} from '../../store/general/thunks';
import {getAllCitiesSelector} from '../../store/general/selectors';
import './CityGrid.css';

const CityGrid = () => {
    const listCities = useSelector(getAllCitiesSelector);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCitiesThunk());
    }, [dispatch]);

    return (
        <>
            <Header/>
            <div className='city-grid'>
                <div className='cities-block'>
                    {(listCities && listCities.length > 0) ? 
                        listCities.slice(0).reverse().map(element =><CityCard key={element.id} city={element}/>) 
                        : 
                        <h2 className='title'>Please add a city to see the weather</h2>
                    }
                </div>
            </div>
        </>
    );
}

export default CityGrid;