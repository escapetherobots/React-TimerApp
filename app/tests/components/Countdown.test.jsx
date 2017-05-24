var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist();
	});

	//ASYNC TESTS
	it('handleSetCountdown', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(10);

		expect(countdown.state.count).toBe(10);
		expect(countdown.state.countdownStatus).toBe('started');

		// this test is asynchronous...it will normally fail so use the DONE arg
		setTimeout( () => {
			expect(countdown.state.count).toBe(9);
			done();
		}, 1001)
	});

	//ASYNC TESTS
	it('handleSetCountdown never less than zero', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(1);

		// this test is asynchronous...it will normally fail so use the DONE arg
		setTimeout( () => {
			expect(countdown.state.count).toBe(0);
			done();
		}, 3001)
	});

	
});