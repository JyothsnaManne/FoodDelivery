import React, { Component } from 'react';
import User from '../model/User';
import { UserSignIn } from '../actions/foodActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class Login extends Component {

    User
    constructor() {
        super()
        this.user = new User()
        this.state = {
            user: this.user,
            passwordError: false,
            disabledFlag: true,
            submitFlag: true,
            phoneError: false,
            phoneConditionError: false,
            charCondition: false
        }
    }


    handlePasswordChange(event) {
        this.user.userPassword = event.target.value
        this.setState({
            user: this.user,
            passwordError: (this.user.userPassword === "") ? true : false,


        })
        this.buttonFlag()
    }

    handleMobile(event) {
        this.user.userMobile = event.target.value
        this.setState({
            user: this.user,
            phoneError: (this.user.userMobile === "") ? true : false,
            phoneConditionError: (this.user.userMobile.length !== 10) ? true : false,
            charCondition: (isNaN(this.user.userMobile)) ? true : false

        })
        this.buttonFlag()
    }

    buttonFlag() {
        this.setState({
            disabledFlag: ((this.user.userPassword === "") || (this.user.userMobile === "") || (this.user.userMobile.length !== 10) || (isNaN(this.user.userMobile))) ? true : false
        })

    }
    handleSubmit(event) {

        event.preventDefault();

        this.props.UserSignIn(this.state.user.userMobile, this.state.user.userPassword)

        this.setState({
            submitFlag: false
        })
    }
    render() {
        return (
            <div className="container">

                <div className="jumbotron py-3 my-4">
                    <p className="display-4 text-center mb-0">Login</p>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>

                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" className="form-control" id="mobile" placeholder="Mobile" value={this.state.user.userMobile} onChange={(event) => this.handleMobile(event)} />
                        {
                            (this.state.phoneError) ?
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>sorry!</strong> Mobile Cannot be empty
                          </div> : (this.state.phoneConditionError) ?
                                    <div className="alert alert-dismissible alert-danger">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>sorry!</strong> Number should be exactly 10 Characters
                                  </div> : (this.state.charCondition) ?
                                        <div className="alert alert-dismissible alert-danger">
                                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                                            <strong>sorry!</strong>No Charactersare allowed
                                      </div> : null

                        }
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.user.userPassword} onChange={(event) => this.handlePasswordChange(event)} />
                        {
                            (this.state.passwordError) ?
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>sorry!</strong> Password Cannot be empty
                          </div> : null
                        }
                    </div>



                    <button type="submit" className="btn btn-primary mb-3" disabled={this.state.disabledFlag}>Submit</button>
                </form>
                {

                    ((this.props.user.userId !== undefined) && (!this.state.submitFlag)) ?
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Well done!</strong> You successfully registerd.
                        </div> : ((this.props.user.userId === undefined) && (!this.state.submitFlag)) ?
                            <div className="alert alert-dismissible alert-danger">
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Sorry!</strong>User Does not Exists.
                        </div> : null
                }
            </div>

        );
    }
}
Login.propTypes = {
    UserSignIn: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    user: state.reducer.user,
});
export default connect(mapStateToProps, { UserSignIn })(Login);