var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

	onSearch(e){
		e.preventDefault();
		var city = this.refs.navSearch.value;
		var encodedLocation = encodeURIComponent(city);
		console.log(encodedLocation);

		if(encodedLocation.length > 0) {
			this.refs.navSearch.value = '';
			// set URL
			window.location.hash = '#/?location=' + encodedLocation;
		}
		
	},

	render: function(){
		return (
			<div  >
				<nav className="top-bar nav-background" data-responsive-toggle="example-menu" data-hide-for="medium">
					<div className="top-bar-left">
				
						<ul className="menu" data-hide-for="medium">
							<li className="menu-text">CRUX TIMER</li>
							<li><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
							<li><Link to="/countdown" activeClassName="active">Countdown</Link></li>
							
			
							
						</ul>
					</div>
					<div className="top-bar-right">
						
					</div>
				</nav>
			</div>
		);
	}

});

module.exports = Nav;