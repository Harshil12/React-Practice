import { useState } from "react";

import Clock from "./Clock";
import UserCard from "./UserCard";
import { Button, CloseButton, Navbar } from "react-bootstrap";
function App() {
  const [time, setTime] = useState("");

  return (
    <>
      {
        <div
          style={{
            color: "red",
            border: "1px solid green",
            backgroundColor: "lightgray",
            padding: "10px",
          }}
        >
          <Navbar></Navbar>
          <Button variant="primary">Primary</Button>
          <CloseButton />
          <Clock />
          <UserCard />
        </div>
      }
    </>
  );
}

export default App;
