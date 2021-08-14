import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

<BrowserRouter>
  <MainLayout>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/info' component={Info} />
    </Switch>
  </MainLayout>;
</BrowserRouter>;