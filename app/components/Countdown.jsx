var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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

	componentWillUnmount() {
		//console.log('will unmount: by by');
		clearInterval(this.timer);
		this.timer = undefined;
	},

	componentDidUpdate(prevProps, prevState) {
		//if react sees a change in the state (any time a button changes the countdownStatus)!!!
		if(this.state.countdownStatus !== prevState.countdownStatus){
			switch(this.state.countdownStatus){
				case 'started': 
					this.startTimer();
					break;

				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
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

			if(newCount === 0){
				this.setState({countdownStatus: 'stopped'});
			}
		}, 1000);
	},

	handleSetCountdown(seconds){
		this.setState({
			count: seconds,
			countdownStatus: 'started'

		});
	},

	handleStatusChange(newStatus){
		this.setState({
			countdownStatus: newStatus
		});
	},

	render: function(){
		var {count, countdownStatus} = this.state;
		//------------------
		var renderControlArea = () => {
			if (countdownStatus !== 'stopped'){
				return <Controls onStatusChange={this.handleStatusChange} inputStatus={countdownStatus}/>
			} else {
				return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
			}
		};

		return (
			<div className="row">
				<div className="column small-centered medium-6 large-6">
				<h1 className="page-title">Countdown App</h1>
				<Clock className="clock" totalSeconds={count}/>
				{renderControlArea()}
				</div>
			</div>
		);
	}




});
	

module.exports = Countdown;