var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

// var About = React.createClass({
// 	render: function(){
// 		return (
// 			<h2>About</h2>
// 		);
// 	}


// });

var Countdown = React.createClass({

	getInitialState() {
		return {count: 0};
	},

	handleSetCountdown(seconds){
		this.setState({
			count: seconds
		})
	},

	render: function(){
		var {count} = this.state;

		return (
			<div className="row">
				<Clock className="clock" totalSeconds={count}/>
				<CountdownForm onSetCountdown={this.handleSetCountdown}/>
			</div>
		);
	}




});
	

module.exports = Countdown;