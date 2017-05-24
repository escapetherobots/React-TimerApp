var React = require('react');
var Clock = require('Clock');

// var About = React.createClass({
// 	render: function(){
// 		return (
// 			<h2>About</h2>
// 		);
// 	}


// });

var Countdown = React.createClass({

	render: function(){
		return (
			<div className="row">
				<Clock className="clock" totalSeconds={129}/>
			</div>
		);
	}




});
	

module.exports = Countdown;