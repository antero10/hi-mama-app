import * as React from 'react';
import { connect} from "react-redux";
import { login } from "../../actions/index";
import ReactSignupLoginComponent from 'react-signup-login-component';
import './Login.sass';

const mapStateToProps = (state: any) => {
  return {
    user: state.user
  };
};

class Login extends React.Component<any, any>  {
  public constructor(props: any) {
    super(props);
    this.signupWasClickedCallback = this.signupWasClickedCallback.bind(this);
    this.loginWasClickedCallback = this.loginWasClickedCallback.bind(this);
    this.recoverPasswordWasClickedCallback = this.recoverPasswordWasClickedCallback.bind(this);
  }
  private signupWasClickedCallback(data: any): void {
    console.log(data);
  };
  private loginWasClickedCallback(data: any): void {
    this.props.dispatch(login(data.username, data.password));
  };
  private recoverPasswordWasClickedCallback(data: any): void {
    console.log(data);
  };
  public render() {
    return (
      <div>
      <ReactSignupLoginComponent
             title="Hi mama Login"
             handleSignup={this.signupWasClickedCallback}
             handleLogin={this.loginWasClickedCallback}
             handleRecoverPassword={this.recoverPasswordWasClickedCallback}
         />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
