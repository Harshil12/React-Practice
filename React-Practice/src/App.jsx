import { useState } from "react";
import "./App.css";
import Wrapper from "./Wrapper";
import Display from "./Dispaly";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const userDate = [
    {
      name : "harshil",
      age : 40,
      id : 2
    },
    {
      name : "pintoo",
      age : 35,
      id : 1
    }
  ]

  const handleSkillChange = (skill) => {
    setSkills((prevSkills) => {
      if (prevSkills.includes(skill)) {
        return prevSkills.filter((s) => s !== skill);
      } else {
        return [...prevSkills, skill];
      }
    });
  };
  return (
    <>
      {
        <div>
          <Wrapper>
            <form action="" method="get">
              <input
                type="text"
                value={name}
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
              <br></br>
              <br></br>

              <input
                type="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br></br>
              <br></br>

              <input
                type="text"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br></br>
              <br></br>
              <label className="skills-title">Select your skills</label>

              <div className="skills">
                <div className="skill-row">
                  <input
                    type="checkbox"
                    onChange={() => handleSkillChange("HTML")}
                  />
                  <span>HTML</span>
                </div>

                <div className="skill-row">
                  <input
                    type="checkbox"
                    onChange={() => handleSkillChange("CSS")}
                  />
                  <span>CSS</span>
                </div>

                <div className="skill-row">
                  <input
                    type="checkbox"
                    onChange={() => handleSkillChange("JavaScript")}
                  />
                  <span>JavaScript</span>
                </div>
              </div>
              <br></br>
              <br></br>
              <div>
                <button
                  style={{
                    padding: "10px",
                    margin: "10px",
                    height: "40px",
                    width: "100px",
                  }}
                >
                  Submit{" "}
                </button>
                <button
                  style={{
                    padding: "10px",
                    margin: "10px",
                    height: "40px",
                    width: "100px",
                  }}
                  onClick={() => {
                    setName("");
                    setPassword("");
                    setEmail("");
                  }}
                >
                  Clear
                </button>
              </div>
              <h3>Name: {name} </h3>
              <br></br>
              <br></br>
              <h3>Password: {password} </h3>
              <br></br>
              <br></br>
              <h3>Email: {email} </h3>
            </form>
            <h4>Skills: {skills.toString()}</h4>
          </Wrapper>
          <Wrapper>
            <h1>Looping in JSX : </h1>
            <br></br>
            <br></br>
            <table border={1}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {userDate.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
            <br></br>
            {
              userDate.map((user) => (
                <div key={user.id}>
                 <Display User={user} />
                </div>
              ))}
          </Wrapper>
        </div>
      }
    </>
  );
}

export default App;
