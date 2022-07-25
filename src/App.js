import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import {Home,About,Contact,Projects,Skills,SharedLayout} from "./pages"

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />} >

          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
          
        </Routes>
      </Router>
    )
}

export default App;
