import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane, FaFacebookF, FaDiscord } from "react-icons/fa";

import logo from "../../assets/logo.png";

const Footer = () => {
  const pages = [
    { name: "Home", link: "/" },
    { name: "How to buy", link: "/" },
    { name: "Tokenomics", link: "/#tokenomics" },
    { name: "whitepaper", link: "/mint#whitepaper" },
    { name: "team", link: "/mint#team" },
    { name: "Roadmap", link: "/#roadmap" },
    { name: "donation", link: "/donation" },
  ];

  const socialLinks = [
    {
      icon: <BsTwitterX />,
      link: "/",
    },
    {
      icon: <FaTelegramPlane />,
      link: "/",
    },
    {
      icon: <FaFacebookF />,
      link: "/",
    },
    {
      icon: <FaDiscord />,
      link: "/",
    },
  ];

  return (
    <Box className="w-full h-[95vh] flex flex-col items-center justify-center px-14 py-24 bg-[#09121d]">
      <Box className="h-[2px] w-full footer-line mb-[80px]" />
      <Typography className="text-[#7b7b7b] text-lg font-semibold poppins">
        contact@infiniti.com
      </Typography>
      <Box className={` justify-center w-fit py-10`}>
        <Box className={`justify-center gap-x-8 hidden sm:flex `}>
          {pages.map((page, i) => (
            <Link key={i} className="text-white no-underline" to={page.link}>
              <Typography className={`text-xs uppercase text-white poppins`}>
                {page.name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
      <Typography className="text-[#7b7b7b] text-base font-semibold poppins text-center">
        Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The
        value of cryptocurrencies may fluctuate. Profits may be subject to
        capital gains or other taxes applicable in your jurisdiction
      </Typography>
      <Box className="w-full flex justify-between items-center pt-16">
        <Box className="w-fit">
          <Box className="flex items-center gap-x-2.5">
            <img src={logo} alt="logo" className="w-fit h-8 ms-4 sm:ms-0 " />
            <Typography className={`text-2xl font-semibold text-white jura`}>
              InfinitiCoin
            </Typography>
          </Box>
          <Typography className="text-[#7b7b7b] text-base font-bold poppins text-center">
            2023@ All Rights Reserved
          </Typography>
        </Box>
        <Box className="w-fit">
          <Box className="w-fit gap-x-10 flex items-center">
            <Link className="text-white no-underline" to={"/"}>
              <Typography className={`text-xs uppercase text-white poppins`}>
                Privacy Policy
              </Typography>
            </Link>
            <Link className="text-white no-underline" to={"/"}>
              <Typography className={`text-xs uppercase text-white poppins`}>
                Terms and Conditions
              </Typography>
            </Link>
          </Box>
          <Box className="flex justify-end items-center gap-x-2 pt-4">
            {socialLinks.map((link, i) => (
              <Link key={i} className="no-underline" to={link.link}>
                <Typography className={`text-3xl text-[#d9d9d9]`}>
                  {link.icon}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
