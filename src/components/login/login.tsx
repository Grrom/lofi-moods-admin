import { useState } from "react";
import { authenticationHelper } from "../../App";
import AlertHelper from "../../helpers/alert-helper";
import Helpers from "../../helpers/helpers";
import { MiniLoader } from "../misc/loader";
import "./login.scss";

export default function Login({ updateAuth }: { updateAuth: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  async function submitLogin() {
    setSubmitting(() => true);
    let username = Helpers.inputGetter("username");
    let password = Helpers.inputGetter("password");

    let noempty = username.length > 0 && password.length > 0;

    if (noempty) {
      try {
        let loginResult = await authenticationHelper.login(username, password);
        if (loginResult) {
          setSubmitting(() => false);
          AlertHelper.successToast("Logged in successfully!");
          if (rememberMe) {
            let expiry = new Date();
            expiry.setDate(expiry.getDate() + 30);
            document.cookie = `admin=${loginResult}; expires=${expiry}; SameSite=Lax`;
          }
          updateAuth();
        }
      } catch (e) {
        AlertHelper.errorToast(
          `Failed to sign in: ${Helpers.getFirebaseError(e)}`
        );
        setSubmitting(() => false);
      }
    } else {
      AlertHelper.infoToast("Please Fill All Fields");
      setSubmitting(() => false);
    }
  }

  return (
    <div id="login">
      <div className="login-form">
        <h1 className="login-title">Admin Login</h1>
        <div className="form">
          <h4 className="label">Username</h4>
          <input id="username" type="text" className="swal2-input input" />
          <h4 className="label">Password</h4>
          <input
            id="password"
            className="swal2-input input"
            type={showPassword ? "text" : "password"}
          />

          <div className="checkbox">
            <strong className="label">Show Password</strong>
            <input
              className="input"
              type="checkbox"
              onChange={(value) => {
                setShowPassword(() => value.target.checked);
              }}
            />
          </div>

          <div className="checkbox">
            <strong className="label">Remember Me</strong>
            <input
              className="input"
              type="checkbox"
              onChange={(value) => setRememberMe(() => value.target.checked)}
            />
          </div>

          <div className="login-button" onClick={() => submitLogin()}>
            {submitting ? (
              <h3>
                <MiniLoader />
              </h3>
            ) : (
              <h3>LOGIN</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
