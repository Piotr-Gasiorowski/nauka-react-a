import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import List from '../List/ListContainer';
import FAQ from '../FAQ/FAQ';
import SearchResults from '../SearchResults/SearchResultsContainer.js';

const App = ()=>
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={FAQ} />
        <Route exact path='/list/:id' component={List} />
        <Route exact path='/search/:cards' component={SearchResults} />
      </Switch>
    </MainLayout>;
  </BrowserRouter>;

export default App;