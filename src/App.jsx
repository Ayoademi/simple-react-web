// import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RandomImages from "./pages/RandomImages"
// import Dogs from "./pages/Dogs"
import Nav from "./components/Nav"
import "./App.css"

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random-images" element={<RandomImages />} />
          {/* <Route path="/dogs" element={<Dogs />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
