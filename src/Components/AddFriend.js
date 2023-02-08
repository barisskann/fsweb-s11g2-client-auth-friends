import axios from "axios";
import { useState } from "react";
export default function AddFriends() {
  const [data, setData] = useState({ name: "", email: "" });
  console.log(data);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:9000/api/friends",
        { name: data.name, email: data.email },
        {
          headers: {
            Authorization: localStorage.getItem("key"),
          },
        }
      )
      .then((res) => setData({ name: "", email: "" }))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center flex-col align-center w-1/4 m-auto mt-6 text-center gap-4">
        <h1 className="text-4xl">ADD FRIEND</h1>
        <div className="flex flex-col">
          <label className="mb-2 text-orange-600">FRIEND NAME</label>
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            className="border-emerald-600 border-solid outline outline-cyan-300 focus:outline-none focus:ring focus:ring-cyan-500 ..."
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-orange-600"> EMAIL</label>
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            className="outline outline-cyan-300 focus:outline-none focus:ring focus:ring-cyan-500 "
          />
        </div>
        <div>
          <button className="w-full border-solid border-2 border-indigo-600 rounded p-1 bg-slate-300 hover:bg-slate-400">
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
}
