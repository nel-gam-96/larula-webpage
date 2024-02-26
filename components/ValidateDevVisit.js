import { useState } from "react";
import axios from "axios";

export default function ValidateDevVisit({ setIsAuthorized }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  async function validateCredentials() {
    console.log(user, pass);
    let data = {
      user,
      pass,
    };
    try {
      let response = await axios.post("/api/validateVisit", data);
      console.log(response);
      if (response.status === 200) {
        setIsAuthorized(true);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "600px",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>you&apos;re not authorized</div>
        <input
          onChange={(e) => setUser(e.target.value)}
          placeholder="user"
          type="text"
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
          type="password"
        />
        <button onClick={validateCredentials}>Accept</button>
      </div>
    </>
  );
}
