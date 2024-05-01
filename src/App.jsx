import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the main page, which renders the RecipesList component */}
        <Route path="/" element={<Homepage />} />
        {/* Define the route for the recipe detail page, which renders the RecipeDetail component */}
        {/* <Route path="/recipe/:id" element={</>} /> */}
      </Routes>
    </Router>
  );
}

export default App;