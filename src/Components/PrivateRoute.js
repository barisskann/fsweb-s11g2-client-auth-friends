import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const check = localStorage.getItem("key");

  if (check) {
    return children;
  } else {
    return <Redirect to="/" />;
  }
}
