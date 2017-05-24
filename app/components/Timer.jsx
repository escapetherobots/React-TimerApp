var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');

// var About = React.createClass({
// 	render: function(){
// 		return (
// 			<h2>About</h2>
// 		);
// 	}


// });
var Timer = React.createClass({

	getInitialState() {
		return {
			count: 0,
			timerStatus: 'stopped'
		}	
	},

	componentWillUnmount() {
		//console.log('will unmount: by by');
		clearInterval(this.timer);
		this.timer = undefined;
	},

	componentDidUpdate(prevProps, prevState) {
		//if react sees a change in the state (any time a button changes the countdownStatus)!!!
		if(this.state.timerStatus !== prevState.timerStatus){
			switch(this.state.timerStatus){
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
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount >= 0? newCount : 0
			});
		}, 1000);
	},

	handleStatusChange(newStatus){
		this.setState({
			timerStatus: newStatus
		});
	},

	render: function(){
		var {count, timerStatus} = this.state;
		var renderControlArea = () => {
			if (timerStatus === 'stopped'){
				return <Controls onStatusChange={this.handleStatusChange} inputStatus={timerStatus}/>
			} else if (timerStatus === 'paused') {
				return <Controls onStatusChange={this.handleStatusChange} inputStatus={timerStatus}/>
			} else {
				return <Controls onStatusChange={this.handleStatusChange} inputStatus={timerStatus}/>
			}
		};

		return (
			<div className="row">
				<div className="columns medium-8 large-8 small-centered">
					<h1 className="page-title">Timer</h1>
					<Clock className="clock" totalSeconds={count}/>
					{renderControlArea()}
					
				</div>
			</div>
		);
	}




});
	

module.exports = Timer;