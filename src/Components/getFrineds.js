import axios from "axios";
import { useEffect, useState } from "react";

export default function GetFriend(key) {
  const [friends, setFriends] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:9000${key}`, {
        headers: {
          Authorization: localStorage.getItem("key"),
        },
      })
      .then((res) => {
        setFriends(res.data);
        setLoading(false);
      });
  }, []);
  return { friends, loading };
}
