import React, { useState } from "react";
import "./Login.scss";
import { Button } from "antd";
import { toast } from "react-toastify";
import {handleLogin} from '../../service/LoginService'

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setShowPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const handleInputUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleInputPassword = (event) => {
    setPassword(event.target.value);
  };

  const handlePressEnter = (event) => {
    if (event && event.key === "Enter") {
      this.Login();
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!isShowPassword)
  };

  const Login = async () => {
    try {
      let data = await handleLogin(username, password);
      if (data && data.errCode === 3) {
        localStorage.setItem("token", data.token);

        setIsLoggedIn(true)

        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={username}
                onChange={(event) => handleInputUserName(event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password: </label>
              <div className="show-hidePassword">
                <input
                  type={isShowPassword ? "password" : "text"}
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => handleInputPassword(event)}
                  onKeyDown={(event) => handlePressEnter(event)}
                />
                <span
                  onClick={() => {
                    handleShowPassword();
                  }}
                >
                  <i
                    class={
                      isShowPassword
                        ? "fa-regular fa-eye-slash"
                        : "fa-regular fa-eye"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button className="btn-login" onClick={() => Login()}>
                Login
              </button>
            </div>
            {/* <div className="col-12">
                <span className="forgot-password">Forgot your password</span>
              </div> */}
            <div className="col-12">
              <span className="or-login">Nếu bạn không có tài khoản</span>
            </div>
            <div className="col-12 social-login">
              <Button>
                Đăng kí
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
