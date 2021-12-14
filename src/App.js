import { useEffect, useState } from "react";
import Signin from "./pages/signin/Signin";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "./components/Firebase/Firebase";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      createUserProfileDocument(user);
    });
  }, []);

  return (
    <div className="App relative md:overflow-hidden">
      <Signin />
    </div>
  );
}

export default App;
