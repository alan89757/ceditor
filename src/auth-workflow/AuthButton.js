import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";

function AuthButton() {
  let history = useHistory();
  let auth = useContext(AuthContext);

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default AuthButton;