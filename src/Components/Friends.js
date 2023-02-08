import { useEffect } from "react";
import axios from "axios";
import GetFriend from "./getFrineds";
export default function Friends(params) {
  const { friends, loading } = GetFriend(`/api/friends`);
  let value;
  if (loading) {
    value = <div>LOADİNG</div>;
  } else {
    value = friends.map((i, sayac) => {
      return (
        <div key={sayac} className="flex justify-start gap-3 friends-item pt-2 ">
          <div className="font-bold">-{i.name}</div><div className="font-bold">-{i.email}</div>
        </div>
      );  
    });
  }

  return (
    <div className="flex flex-col w-1/2 m-auto px-5 h-screen  ">
      <div className="text-5xl text-bold friends-title pt-10 ">FRIENDS LIST</div>
      <div className="">{value}</div>
    </div>
  );
}
