import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "./services/Firebase/Firebase";
import { onSnapshot } from "firebase/firestore";
import SigninAndSignup from "./pages/signinPage/SigninAndSignup";
import HomePage from "./pages/mainApp/MainApp";
import { useDispatch, useSelector } from "react-redux";
import { userVerfication } from "./services/Redux/user/userActions";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import Layout from "./components/Layout/Layout";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const userDoc = await createUserProfileDocument(user);
      if (userDoc) {
        onSnapshot(userDoc, (doc) => {
          dispatch(userVerfication({ ...doc.data(), id: userDoc.id }));
        });
      } else {
        dispatch(userVerfication(null));
      }
    });
  }, []);

  return (
    <div className="xl:h-screen max-h-full">
      {user ? (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path=":id" element={<CategoryPage />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/" element={<SigninAndSignup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
