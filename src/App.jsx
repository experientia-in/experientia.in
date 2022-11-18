import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './home'
import BlackMarble from "./nasa-black-marble";
export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nasa-black-marble" element={<BlackMarble/>}/>
      </Routes>
    </Router>
    </>
  )
}
