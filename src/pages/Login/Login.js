import "./Login.scss";
import { Component } from "react";
import Input from "../../components/Input/Input";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import Castle from "../../../src/visual assets/cloud-castle-icon.png";

class Login extends Component {
  state = {
    error: "",
    success: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}api/users/login`, {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        this.setState({ success: true });
      })
      .catch((error) => {
        this.setState({ error: error.response.data });
        console.log(error);
      });
  };

  render() {
    return (
      <main className="login-page">
        <form className="login" onSubmit={this.handleSubmit}>
          <h1 className="login__title">Log in</h1>
          <img className="icon" src={Castle} alt="dreamcatcher icon" />
          <Input className="label" type="text" name="email" label="Email" />
          <Input
            className="label"
            type="password"
            name="password"
            label="Password"
          />

          <button className="login__button">Onward</button>

          {this.state.error && (
            <div className="login__message">{this.state.error}</div>
          )}
          {this.state.success && <Redirect to="/" />}
        </form>
        <p className="sign-up-text">
          No Account?{" "}
          <Link className="sign-up-text" to="/signup">
            Sign up
          </Link>
        </p>
      </main>
    );
  }
}

export default Login;
