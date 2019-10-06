import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom'
import {bool, any, object} from 'prop-types';
import * as firebase from 'firebase'
import Dashboard from '../dashboard/Dashboard'

//renders the guarded route
const ProtectedRouteHoc = ({ component: Component, isLoggedIn, ...rest }) => {
	if (isLoggedIn || rest.public) {
		console.log(firebase.auth())
		console.log(isLoggedIn)
		console.log(rest.public)
		return (
			<Route
				{...rest}
				render={props => {
					return <Component {...props}></Component>;
				}}
			/>
		);
	}

	return <Redirect to={{ pathname: '/login' }} />;
};

ProtectedRouteHoc.propTypes = {
	component: any,
	isLoggedIn: bool,
	rest: object,
	props: object,
};

export default withRouter(ProtectedRouteHoc);


