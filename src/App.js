import { useEffect, useState } from "react";
import Signin from "./pages/signin/SigninAndSignup";
import "./App.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, createUserProfileDocument } from "./components/Firebase/Firebase";
import { onSnapshot } from "firebase/firestore";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const userDoc = await createUserProfileDocument(user);
      if (userDoc) {
        onSnapshot(userDoc, (doc) => {
          setUser({ ...doc.data(), id: userDoc.id });
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <p onClick={() => signOut(auth)} className="text-white">
          {user.id}
        </p>
      ) : (
        <p>not sign in</p>
      )}

      <Signin />
    </div>
  );
}

export default App;
