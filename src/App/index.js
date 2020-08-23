import React from "react";
import ReactDOM from "react-dom";
import Title from '../components/Title'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import UserContext from '../Context/UserContext';

const DashRoute = React.lazy(() => import('../containers/Dashboard'))
const ResponsiveRoute = React.lazy(() => import('../containers/responsiveBoxes'))
const ChartsRoute = React.lazy(() => import('../containers/charts'))

const AppRouter = () => {
	
  	return (
	    <Router>
	      <Switch>
		      	<Route exact path="/login" exact render={() => (
		      	  <React.Suspense fallback={<p>Loading Login...</p>}>
		      	  	<LoginRoute 
		      	  		apiString={appConfig.apiString}/>
		      	  </React.Suspense>
		      	)}/>

		      	<Route exact path="/dashboard" exact render={() => (
		      	  <React.Suspense fallback={<p>Loading Dashboard...</p>}>
		      	  	<DashRoute 
		      	  		data={srcData}/>
		      	  </React.Suspense>
		      	)}/>

		      	<Route exact path="/itemDetails" exact render={() => (
		      	  <React.Suspense fallback={<p>Loading Item Details...</p>}>
		      	  	<DetailRoute />
		      	  </React.Suspense>
		      	)} />

		      	<Route exact path="/charts" exact render={() => (
		      	  <React.Suspense fallback={<p>Loading Item Details...</p>}>
		      	  	<ChartsRoute />
		      	  </React.Suspense>
		      	)} />

		      	<Route exact path="/" exact render={() => (
		      	  <React.Suspense fallback={<p>Loading Item Details...</p>}>
		      	  	<ResponsiveRoute />
		      	  </React.Suspense>
		      	)} />
	      </Switch>
	    </Router>
	  );
};

export default AppRouter;