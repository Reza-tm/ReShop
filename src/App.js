import { useEffect, useState } from "react";
import Signin from "./pages/signin/Signin";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "./components/Firebase/Firebase";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const userDoc = await createUserProfileDocument(user);
      setUser({ ...userDoc.data(), id: userDoc.id });
    });
  }, []);

  return (
    <div>
      <Signin />
    </div>
  );
}

export default App;
