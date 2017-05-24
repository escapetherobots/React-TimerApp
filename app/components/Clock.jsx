var React = require('react');

// var About = React.createClass({
// 	render: function(){
// 		return (
// 			<h2>About</h2>
// 		);
// 	}


// });

var Clock = React.createClass({
	getDefaultProps() {
		totalSeconds: 0
	},

	proptypes: {
		totalSeconds: React.PropTypes.number
	},

	formatSeconds: function(totalSec) {
		var seconds = totalSec % 60;
		var minutes = Math.floor(totalSec / 60);

		if(seconds < 10) {
			seconds = '0' + seconds;
		}

		if(minutes < 10) {
			minutes = '0' + minutes;
		}

		return minutes + ':' + seconds;
	},


	render: function(){
		var {totalSeconds} = this.props;
		var formattedTimeResult = this.formatSeconds(totalSeconds);

		return (
			<div className="clock">
				<span className="clock-text">{formattedTimeResult}</span>
				
				
				
			</div>
		);
	}




});
	

module.exports = Clock;