import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import bg from "../../assets/padbg.webp";
import sol1 from "../../assets/sol-1.svg";
import sol2 from "../../assets/sol-2.svg";
import sol3 from "../../assets/sol-3.svg";

const Solutions = () => {
  const sols = [
    {
      name: "Trading",
      image: sol1,
      caption: "Powering by Swap & Add Liquidity Features.",
    },
    {
      name: "Earn",
      image: sol2,
      caption: "Powering by Staking & Farming",
    },
    {
      name: "Launchpad",
      image: sol3,
      caption: "Powering and Supporting Projects built on Linea.",
    },
  ];
  return (
    <Box
      className="w-full 2xl:max-w-[1120px] relative h-fit bg-no-repeat bg-cover bg-center pb-20 px-5 sm:px-10 flex flex-col"
      sx={{ backgroundImage: `url(${bg})` }}
    >
      <Box className="flex flex-col items-start gap-y-6">
        <Typography className="jakarta uppercase text-[#f3ba2f] text-base font-semibold pb-3 tracking-widest flex flex-col justify-center ps-2">
          Solutions
        </Typography>
        <Typography className="orbitron font-semibold uppercase text-white text-5xl">
          FLASHPAD ECO
        </Typography>
        <Typography className="jakarta py-10 text-white text-xl">
          The native DEX & Launchpad on the Linea chain has the following
          features.
        </Typography>
      </Box>
      <Grid
        container
        className="w-full border-2 border-[#33467a] rounded-3xl p-5"
      >
        {sols.map((sol, i) => (
          <Grid key={i} item xs={12} sm={4} className="py-2.5 sm:py-0">
            <Box className="flex justify-center items-center flex-col">
              <div class="w-fit h-fit p-3 rounded-full aspect-square z-[2] relative shadow-circle-box bg-gradient-5 flex items-center justify-center">
                <img src={sol.image} alt={sol.name} className="h-7 w-auto" />
              </div>
              <Typography className="orbitron font-semibold py-3 capitalize text-white text-lg">
                {sol.name}
              </Typography>
              <Typography className="jakarta text-[#a0a0a2] w-3/4 text-center text-lg">
                {sol.caption}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;
