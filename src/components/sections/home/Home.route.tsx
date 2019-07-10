import React from 'react';
import { Route } from 'react-router';
import HomeComponent from './Home.component';

const homeRoute = <Route key='home' path='/' exact component={HomeComponent} />;

export default homeRoute;
