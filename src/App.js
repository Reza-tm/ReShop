import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "./components/Firebase/Firebase";
import { onSnapshot } from "firebase/firestore";
import SigninAndSignup from "./pages/signinPage/SigninAndSignup";
import HomePage from "./pages/homePage/HomePage";

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
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SigninAndSignup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
