import "../index.css";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
