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
		return {
			count: 0,
			countdownStatus: 'stopped'
		};
	},

	componentDidUpdate(prevProps, prevState) {
		if(this.state.countdownStatus !== prevState.countdownStatus){
			switch(this.state.countdownStatus){
				case 'started': 
					this.startTimer();
					break;
			}
		}
		
	},

	startTimer(){
		this.timer = setInterval( () => {
			var newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0? newCount : 0
			});
		}, 1000);
	},

	handleSetCountdown(seconds){
		this.setState({
			count: seconds,
			countdownStatus: 'started'

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