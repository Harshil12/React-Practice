import { useState } from "react";
import styled from "styled-components";

function UserCard() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid grey",
    padding: "10px",
    margin: "10px",
    width: "200px",
  });

  const Heading = styled.h4`
    margin: 5px;
  `;

  function updatetheme(BGcolor) {
    setCardStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: BGcolor,
    }));
  }

  return (
    <div>
      <Heading>Hello</Heading>
      <button onClick={() => updatetheme("orange")}> Orange Theme</button>
      <button onClick={() => updatetheme("white")}>Default Theme</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Engineer</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Tester</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Manager</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Tester</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Manager</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Tester</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Manager</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Tester</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Manager</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Tester</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Manager</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Tester</h4>
        </div>
        <div style={cardStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEa9qt5V68CZw/profile-displayphoto-crop_800_800/B4DZucXi3tIEAM-/0/1767854981031?e=1771459200&v=beta&t=dvTcVgF6HfCwAq0_PuPCMsTtQqISbDC2fWdiHvUkqtI"
            style={{ width: "200px" }}
          />
          <h4 style={{ margin: "5PX" }}>Software Manager</h4>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
