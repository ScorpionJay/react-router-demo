import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,Link } from 'react-router'

require('./sass/_main.scss')

/* App */
const App = React.createClass({
	render: function(){
		return (
			<div>
				<h1>App</h1>
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/inbox">inbox</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
})

/* About */
const About = React.createClass({
	render() {
		return <h3>About</h3>
	}
})

/* Inbox */
const Inbox = React.createClass({
	render() {
		return (
			<div>
				<h2>Inbox</h2>
				{this.props.children || "Welcome to your Inbox"}
			</div>
		);
	}
})

/* Message */
const Message = React.createClass({
	render(){
		return <h3>Message {this.props.params.id}</h3>
	}
})

// router
render((
	<Router>
		<Route path="/" component={App}>
			<Route path="about" component={About}/>
			<Route path="inbox" component={Inbox}>
				<Route path="messages/:id" component={Message}/>
			</Route>
		</Route>
	</Router>
),document.getElementById('content'))