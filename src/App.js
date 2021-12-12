import { useEffect, useState } from "react";
import Signin from "./pages/signin/Signin";
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  return (
    <div className="App relative md:overflow-hidden">
      <p className="absolute text-white text-xl font-bold left-4 top-2">
        {user ? `${user.displayName} is Sign in` : "User isnt Sign in"}
      </p>
      <Signin />
    </div>
  );
}

export default App;
