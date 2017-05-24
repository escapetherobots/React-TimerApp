var React = require('react');

var CountdownForm = React.createClass({

	componentDidMount() {
		$('.icon-box').hover( function(){
			$(this).css('background-color', 'lightblue');
		});
	},

	onSubmit: function(e){
		e.preventDefault();

		var strSeconds = this.refs.seconds.value;
		//console.log('input count', $('input').length);


		if(strSeconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value = '';
			var strParsed = parseInt(strSeconds, 10);
			this.props.onSetCountdown(strParsed);
		}
	},


	render: function(){
		var renderTest = function(){
			//return <div className="icon-box">ICON BOX</div>
		}

		return (
			<div className="row">
				{renderTest()}
				<div className="column small-centered medium-6 large-6">
				<form onSubmit={this.onSubmit} ref="form" className="countdown-form">
					<input type="text" ref="seconds" placeholder="Enter Time in Seconds"></input>
					<button className="button expanded" type="submit">Start</button>
				</form>
				</div>
			</div>
		);
	}

});

module.exports = CountdownForm;