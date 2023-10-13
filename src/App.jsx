import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Support} from "./pages/Support.jsx";
import {SingleUser} from "./pages/SingleUser.jsx";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/user/:userId" element={<SingleUser />} />
              <Route path="/about" element={<About />} />
              <Route path="/support" element={<Support />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
