import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Route Component Start here
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Contact from "./screens/Contact";
import Result from "./screens/Result";
import ParticipantList from "./screens/ParticipantList";
// Route Compenent Ends here

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/result" element={<Result />}></Route>
            <Route path="/participants" element={<ParticipantList />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
