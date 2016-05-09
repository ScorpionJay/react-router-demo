import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,Link } from 'react-router'

require('./sass/_main.scss')

var App = React.createClass({
	render:function(){
		return (<div>
        <ul role="nav" className="nav">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        {this.props.children}
      </div>)
	}
});

var NavLink = React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
});

var Home = React.createClass({
	render:function(){
		return <div>Home</div>
	}
});

var About = React.createClass({
	render:function(){
		return <div>About</div>
	}
});

render(
	(
		<Router history={hashHistory}>
		    <Route path="/" component={App}>
		      <Route path="/home" component={Home}/>
		      <Route path="/about" component={About}/>
		    </Route>
		 </Router>
	),
	document.getElementById("content")
);