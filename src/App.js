import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import classnames from "./utills/Homebutton";
import "./App.css";
import axios from "axios";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import Friends from "./Components/Friends";
import PrivateRoute from "./Components/PrivateRoute";
import AddFriends from "./Components/AddFriend";
import Control from "./Components/SignControl";
function App() {
  const [check, setCheck] = useState(localStorage.getItem("key") || false);
  const history = useHistory();
  const handleClick = () => {
    localStorage.removeItem("key");
    setCheck(false);
    history.push("/");
  };

  return (
    <div className="mt-4 ">
      <div className="flex border-solid border-2 border-indigo-600 p-4 font-bold ">
        <div className="App flex-1">
          <h1 className="text-amber-900">FRIENDS DATABASE</h1>
        </div>
        <div className="">
          <Link className={classnames} to="/friends">
            FRIENDLIST
          </Link>
          <Link className={classnames} to="/friends/add">
            ADDFRIEND
          </Link>

          {check && (
            <Link onClick={handleClick} className={classnames}>
              LOGOUT
            </Link>
          )}
        </div>
      </div>

      <Switch>
        {localStorage.getItem("key") ? (
          <Route exact path="/">
            <Friends />
          </Route>
        ) : (
          <Route exact path="/">
            <Login setCheck={setCheck} />
          </Route>
        )}
        <PrivateRoute>
          <Route exact path="/friends">
            <Friends />
          </Route>
          <Route exact path="/friends/add">
            <AddFriends />
          </Route>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
