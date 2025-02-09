import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Mymovies from "./Components/Mymovies";
import Watchlist from "./Components/Watchlist";
import Banner from "./Components/Banner/Banner";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Mymovies />
            </>
          }
        />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
