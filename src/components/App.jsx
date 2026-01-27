import "../index.css";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState, useEffect } from "react";
import api from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api
      .getUserinfoFromServer()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error("Error al obtener el usuario:", err);
      });
  }, []);

  const handleUpdateUser = (userData) => {
    (async () => {
      await api.updateUserInfo(userData).then((updatedUser) => {
        setCurrentUser(updatedUser);
      });
    })();
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="body">
        <div className="page">
          <Header />
          <Main currentUser={currentUser} />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
