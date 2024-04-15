import React from "react";
import { Box } from "@mui/material";
import Presale from "../components/Home/Presale";
import About from "../components/Home/About";
import Solutions from "../components/Home/Solutions";

const Home = () => {
  return (
    <Box className="w-full h-fit">
      <Presale />
      <About />
      <Solutions />
    </Box>
  );
};

export default Home;
