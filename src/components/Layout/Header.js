import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import MobileDrawer from "./MobileDrawer";
import StyledButton from "../StyledButton";

const Header = () => {
  const pages = [
    { name: "Features", link: "/" },
    { name: "Trading", link: "/" },
    { name: "Earning", link: "/#earning" },
    { name: "Tokenomics", link: "/#tokenomics" },
    { name: "Roadmap", link: "/#roadmap" },
  ];
  return (
    <Box className="w-full header-shadow header-bg fixed z-50 flex justify-center items-center h-24 bg-transparent">
      <Box className="w-full 2xl:max-w-[1120px] h-16 flex flex-row-reverse md:flex-row-reverse lg:flex-row-reverse xl:flex-row items-center justify-between px-2.5 sm:px-6">
        <MobileDrawer pages={pages} />
        <img src={logo} alt="logo" className="w-fit h-20 ms-4 sm:ms-0 " />
        <Box
          className={`justify-center w-fit hidden md:hidden lg:hidden xl:flex`}
        >
          <Box className={`justify-center gap-x-14 flex`}>
            {pages.map((page, i) => (
              <Link key={i} className="text-white no-underline" to={page.link}>
                <Typography className={`text-sm capitalize text-white jakarta`}>
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          className={`w-fit h-fit hidden md:hidden lg:hidden xl:flex justify-end items-center`}
        >
          <StyledButton />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
