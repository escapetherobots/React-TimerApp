var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');


//object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App Styles
require('style!css!sass!AppStyles');

ReactDOM.render( 
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Timer}/>
			<Route path="countdown" component={Countdown} />
		</Route>
	</Router>,
	document.getElementById('app')
);