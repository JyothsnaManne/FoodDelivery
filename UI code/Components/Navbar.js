import React, { Component } from 'react';
import Login from './Login';
import ViewRestaurents from './ViewRestaurents';

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import SignUp from './SignUp';
import ViewRestaurentsMenu from './ViewRestaurentsMenu';

class Navbar extends Component {

    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <NavLink className="navbar-brand" to="/" activeClassName="active">Food Delivery</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link font-weight-bold font-italic mr-3 p-2" to="/signup" activeClassName="active"><span><i className="far fa-user mr-1"></i></span>SignUp</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link font-weight-bold font-italic mr-3 p-2" to="/login" activeClassName="active"><span><i className="fas fa-sign-in-alt mr-1"></i></span>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link font-weight-bold font-italic mr-3" to="/restaurent" activeClassName="active"><span><i className="fas fa-utensils mr-1"></i></span>View Restaurents</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link font-weight-bold font-italic mr-3" to="#" activeClassName="active"><span><i className="fas fa-shopping-cart mr-1"></i></span>Cart</NavLink>
                            </li>
                            <form className="form-inline ml-2 my-4 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search Restarurent..." />
                                <button className="btn btn-secondary my-4 my-sm-1" type="submit"><i className="fas fa-search m-auto"></i></button>
                            </form>
                        </ul>
                    </div>
                </nav>
                
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/restaurent" component={ViewRestaurents} />
                <Route exact path="/" component={ViewRestaurents} />
                <Route exact path="/restaurent/:restaurantId" component={ViewRestaurentsMenu} />
                
            </Router>
        );
    }
}


export default Navbar;