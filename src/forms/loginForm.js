import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class LoginForm extends React.Component {

  renderInput = (formProps) => {
    return(
      <div>
        <label>{ formProps.label }</label>
        <input {...formProps.input} type={ formProps.type ? formProps.type : "" }className="inputBox"/>
      </div>
    );
  }

  onSubmit = ({ userName, password }) => {
    const loginDetails =  {'email': userName,'password': password}
    this.props.setUser('auth/login', loginDetails);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="loginForm">
          <div className="loginTitle">Login</div>
          <Field name="userName" component={this.renderInput} label="Username (Email address):"/>
          <Field name="password" component={this.renderInput} type="password" label="Password:"/>
          <button className="submit loginButton">Login</button>
          <hr/>
          <div id="signUpLink">
            Don't have an account? <Link to="/signUp">Sign up</Link> here
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'loginForm' })(LoginForm)
