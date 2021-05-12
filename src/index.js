import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Single from './components/posts/Single';
import Admin from './admin';
import Edit from './components/admin/Edit';
import Create from './components/admin/Create';
import Delete from './components/admin/Delete';


const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path='/admin/' component={Admin} />
				<Route exact path='/admin/create/' component={Create} />
				<Route exact path='/admin/edit/:id/' component={Edit} />
				<Route exact path='/admin/delete/:id/' component={Delete} />
				<Route path="/register/" component={Register} />
				<Route path="/login/" component={Login} />
				<Route path="/logout/" component={Logout} />
				<Route path="/post/:slug/" component={Single} />
			</Switch>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));
