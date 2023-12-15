import React from "react";
import PropTypes from "prop-types";
import "../auth.scss";

class RegisterModal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    openLoginModal: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isOpen, onClose } = this.props;

    if (!isOpen) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <img className="logo" src="/logo.png" alt="Logo" />
              <h2>CREATE ACCOUNT</h2>
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Email Address"
                name="username"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <button className="sign-in-button">Create Account!</button>
            </div>

            <div className="register">
              <h4>Already have an account?</h4>
              <p
                className="sign-in"
                onClick={() => {
                  onClose();
                  this.props.openLoginModal();
                }}
              >
                Sign in
              </p>
            </div>

            <div className="divider">
              <div className="line" />
              <span>OR</span>
              <div className="line" />
            </div>

            <div className="social-buttons">
              <button className="google-button">
                <img src="/google.png" alt="Google" />
                Continue with Google
              </button>
              <button className="apple-button">
                <img src="/apple.png" alt="Apple" />
                Continue with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterModal;
