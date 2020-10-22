import { Button, Divider } from "antd";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="login-page">
      <div className="container">
        <img src="./images/logo.png" alt="Logo" />
        <div className="content">
          <div className="body">
            <div className="heading">Welcome back!</div>
            <div className="subheading">
              Please sign in to your account below.
            </div>
          </div>
          <Divider type="horizontal" />
          <Button type="primary" htmlType="button">
            Login with your Microsoft account
          </Button>
        </div>
        <div className="copyline">Copyright © JAVAT 365 - {new Date().getFullYear()}</div>
      </div>
    </div>
  );
};

export default Login;
