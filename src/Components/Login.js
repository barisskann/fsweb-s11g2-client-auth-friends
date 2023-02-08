import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import GetFriends from "./getFrineds";
import { useState } from "react";

export default function Login(params) {
  const { setCheck } = params;
  const [data, setData] = useState({
    username: "workintech",
    password: "wecandoit",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", data)
      .then((res) => {
        setCheck(true);

        localStorage.setItem("key", res.data.token);
        history.push("/friends");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit} className="w-64 m-auto text-center mt-6">
      <h1 className="font-bold text-3xl">LOGIN</h1>
      <div>
        <label className="text-slate-500">Username:</label>
        <input
          className="border-2 border-red-400 outline-cyan-500	p-1 w-full"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
      </div>{" "}
      <div>
        <label className="text-slate-500">Password:</label>
        <input
          className="border-2 border-red-400 outline-cyan-500 p-1 w-full "
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <button
        className=" w-full bg-slate-500 mt-2 rounded-md font-bold"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  );
}
