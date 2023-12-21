import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MiniDrawer from "./MiniDrawer";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <MiniDrawer />
      </BrowserRouter>
    </div>
  );
};

export default Home;
