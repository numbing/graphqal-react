import React, { Component } from "react";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import "./signIn.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have a account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Sign in with google</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
