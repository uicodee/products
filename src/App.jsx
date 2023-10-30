import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Support} from "./pages/Support.jsx";
import {SingleUser} from "./pages/SingleUser.jsx";
import {observer} from "mobx-react-lite";
import {AuthProvider} from "./providers/AuthProvider.js";


const App = observer(() => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<AuthProvider><Home /></AuthProvider>} />
              <Route path="/home" element={<Home />} />
              <Route path="/user/:userId" element={<SingleUser />} />
              <Route path="/about" element={<About />} />
              <Route path="/support" element={<Support />} />
          </Routes>
      </BrowserRouter>
  )
})

export default App
