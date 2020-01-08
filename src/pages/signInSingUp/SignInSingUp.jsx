import React from "react";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

import "./signInSingUp.scss"

const SignInSingUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp/>
    </div>
  );
};

export default SignInSingUp;
