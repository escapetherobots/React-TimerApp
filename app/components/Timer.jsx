var React = require('react');

var TimerControls = require('TimerControls');
var Clock = require('Clock');

// var About = React.createClass({
// 	render: function(){
// 		return (
// 			<h2>About</h2>
// 		);
// 	}


// });

var Timer = React.createClass({

	render: function(){
		return (
			<div className="row">
				<div className="columns medium-8 large-8 small-centered">
					<h2 className="text-center page-title">Timer</h2>
					<TimerControls />
				</div>
			</div>
		);
	}




});
	

module.exports = Timer;