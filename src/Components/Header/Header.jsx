import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getCitiesByNameSearchThunk, addCityThunk} from '../../store/general/thunks';
import {getSearchResultsSelector} from '../../store/general/selectors';
import {useForm} from 'react-hook-form';
import Input from '../Input';
import Button from '../Button';
import './Header.css';

const Header = ({name}) => {
    let searchResults = useSelector(getSearchResultsSelector);
    const {handleSubmit, register} = useForm();
    const dispatch = useDispatch();

    const heandleSearch = (value, e) => {
        e.target.reset();
        e.preventDefault();
        dispatch(getCitiesByNameSearchThunk(value.cityName));
    }

    const addCity = (cityId) => {
        dispatch(addCityThunk(cityId));
    }

    return (
        <header className='header-block'>
            <Link to="/weather">
                <h1 className='logo'>Weather Forecast</h1>
            </Link>
            <div className='search-block'>
                {!name ? 
                    <div className='dropdown'>
                        <form className='form-search' onSubmit={handleSubmit(heandleSearch)}>
                            <div>
                                <Input 
                                    id='cityName' 
                                    name='cityName' 
                                    className='input-search' 
                                    type='text' 
                                    placeholder='Search City' 
                                    autoComplete='off' 
                                    reference={register({})}
                                />
                                <ul className="dropdown-menu">
                                    {searchResults ? 
                                        searchResults.map(element => <li onClick={() => addCity(element.id)} id="male">
                                                                        {element.name}, {element.sys.country}
                                                                    </li>) : ''
                                    }
                                </ul>
                            </div>
                            <Button className='button-search' name='Search'></Button>
                        </form>
                    </div>
                    :
                    <div className='cityName'>{name}</div>
                }
            </div>
        </header>
    ); 
}

export default Header;