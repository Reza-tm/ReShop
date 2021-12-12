import { useEffect, useState } from "react";
import Signin from "./pages/signin/Signin";
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/Firebase/Firebase";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <div className="App relative md:overflow-hidden">
      <Signin />
    </div>
  );
}

export default App;
