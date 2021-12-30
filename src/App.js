import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "./services/Firebase/Firebase";
import { onSnapshot } from "firebase/firestore";
import SigninAndSignup from "./pages/signinPage/SigninAndSignup";
import HomePage from "./pages/mainApp/MainApp";
import { useDispatch, useSelector } from "react-redux";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import Layout from "./components/Layout/Layout";
import { userVerification } from "./services/Redux/user/userSlice";
import ReactLoading from "react-loading";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const userDoc = await createUserProfileDocument(user);
      if (userDoc) {
        onSnapshot(userDoc, (doc) => {
          dispatch(userVerification({ ...doc.data(), id: userDoc.id }));
        });
      } else {
        dispatch(userVerification(false));
      }
    });
  }, []);

  return (
    <div className="xl:h-screen relative max-h-full">
      {user ? (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path=":id" element={<CategoryPage />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      ) : user == false ? (
        <Routes>
          <Route path="/" element={<SigninAndSignup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <div className="centerXY">
          <ReactLoading type="bubbles" />
        </div>
      )}
    </div>
  );
}

export default App;
