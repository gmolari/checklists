import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useCookies } from "react-cookie";
import { UserProvider } from "./context/Context";

function App() {
  const [cookies, setCookies] = useCookies(["cType", "cCheck", "cIndex"]);

  return (
    <main id="main">
      <Router>
        <UserProvider>
          <Routes>
            <Route
              path="/"
              element={<Home cookies={cookies} setCookies={setCookies} />}
            />
          </Routes>
        </UserProvider>
        <footer className="Footer" >DEVELOPED BY G. MOLARI</footer>
      </Router>
    </main>
  );
}

export default App;
