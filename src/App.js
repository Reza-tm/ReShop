import { useEffect, useState } from "react";
import Signin from "./pages/signin/Signin";
import firebase from "./components/Firebase/Firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => setUser(user));
  }, []);

  return (
    <div className="App relative md:overflow-hidden">
      <p className="absolute text-white text-xl font-bold left-4 top-2">{user ? "User is Sign in" : "User isnt Sign in"}</p>
      <Signin />
    </div>
  );
}

export default App;
