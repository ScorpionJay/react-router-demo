import React from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute ,Route, hashHistory,Link,Redirect } from 'react-router'

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

const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!!!</div>
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



/* routes */
const routes = {
	path: '/',
	component: App,
	IndexRoute :{component: Dashboard},
	childRoutes: [
		{ path: 'about', component: About},
		{
			path: 'inbox',
			component: Inbox,
			childRoutes : [{
				path: 'messages/:id',
				onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
			}]
		},
		{
			component: Inbox,
			childRoutes: [{
				path: 'messages/:id',component:Message
			}]
		}
	]
}

// router
render(
<Router history={hashHistory} routes={routes} />
,document.getElementById('content'))