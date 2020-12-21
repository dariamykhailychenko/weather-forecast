import React  from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Wrapper from '../../Components/Wrapper';
import CityGrid from '../../Components/CityGrid';
import City from '../../Components/City';

const AppRouter = () => {
    return (
        <Wrapper>
            <Switch>
                <Route path="/weather" component={CityGrid}/>
                <Route path="/city/:cityId" component={City}/>
                <Redirect to="/weather"/>
            </Switch>
        </Wrapper>
    );
}
 
export default AppRouter;