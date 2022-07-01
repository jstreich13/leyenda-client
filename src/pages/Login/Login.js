import "./Login.scss";
import { Component } from "react";
import Input from "../../components/Input/Input";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import DreamcatcherIcon from "../../../src/visual assets/dreamcatcher-icon.png";

class Login extends Component {
  state = {
    error: "",
    success: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/users/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        this.setState({ success: true });
      })
      .catch((error) => {
        this.setState({ error: error.response.data });
      });
  };

  render() {
    return (
      <main className="login-page">
        <form className="login" onSubmit={this.handleSubmit}>
          <h1 className="login__title">Log in</h1>
          <img
            className="icon"
            src={DreamcatcherIcon}
            alt="dreamcatcher icon"
          />
          <Input type="text" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />

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
