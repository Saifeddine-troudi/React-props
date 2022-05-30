import React from "react";
import './App.css';
import photo from "./components/profile/photo.jpg"
import Zlatan from "./components/profile/Zlatan.jpg"
import Profile from "./components/profile/Profile";
import NavBar from "./components/NavBar";

function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <NavBar/>
      <Profile
        fullName="Saifeddine "
        bio="Hello , my name is Saifeddine and i like web development" 
        profession="Full-Stack JS Developer"
        handleName={handleName}
      >
        <img
          style={{ borderRadius:"10px", width: "200px", height: "200px" }}
          src={photo}
          alt="avatar"
        />
      </Profile>
      <Profile
      fullName="Zlatan Ibrahimović "
      bio="Zlatan Ibrahimović naît à Malmö, en Suède, le 3 octobre 1981"
      profession="Un footballeur international suédois qui joue actuellement au poste d'attaquant à l'AC Milan."
      handleName={handleName}
      >
        <img
          style={{ borderRadius:"10px", width: "200px", height: "200px" }}
          src={Zlatan}
          alt="avatar"
          />
          </Profile>
    </div>
  )
}

export default App;