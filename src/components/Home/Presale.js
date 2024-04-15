import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import x from "../../assets/xicon.svg";
import telegram from "../../assets/telegramicon.svg";
import discord from "../../assets/discordicon.svg";
import bg from "../../assets/banner.webp";
import PresaleBox from "./PresaleBox";
import StyledButton from "../StyledButton";
import { IoCopyOutline } from "react-icons/io5";
import { CiDesktopMouse2 } from "react-icons/ci";

const Presale = () => {
  const socialLinks = [
    {
      icon: x,
      link: "/",
    },
    {
      icon: telegram,
      link: "/",
    },
    {
      icon: discord,
      link: "/",
    },
  ];
  const words = ["Gold Investment!", "Defi!", "NFT's"];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  function type() {
    // Current word
    const currentWord = words[wordIndex];
    // Determine the function to be performed
    const shouldDelete = isDeleting ? 1 : -1;
    // Create the new text
    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );
    // Determine if this word is complete
    if (!isDeleting && text === currentWord) {
      // Make a pause at the end
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      // Move to the next word
      setWordIndex((current) => (current + 1) % words.length);
    }
  }
  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 200);
    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
    // Add dependencies to the dependency array
  }, [wordIndex, isDeleting, text]);

  return (
    <Box
      className="w-full 2xl:max-w-[1120px] h-fit bg-no-repeat bg-cover bg-center pt-36 pb-20 px-5 sm:px-10 flex flex-col items-center"
      sx={{ backgroundImage: `url(${bg})` }}
    >
      {/* Top */}
      <Box className="">
        <Typography className="poppins uppercase text-white text-2xl sm:text-4xl ps-2 tracking-[0.3em]">
          Enter
        </Typography>
        <Box className="flex">
          <Typography className="poppins font-semibold uppercase text-white text-7xl sm:text-9xl">
            PRESALE
          </Typography>
          <Typography className="poppins uppercase text-[#f3ba2f] text-sm sm:text-3xl flex flex-col justify-center ps-2">
            N
            <br />
            O
            <br />W
          </Typography>
        </Box>
      </Box>

      {/* End Top */}

      {/* Contract */}

      <Box className="flex flex-col items-center pt-10">
        <Box className="flex-col justify-center sm:justify-start sm:flex items-center">
          <Box className="w-full sm:w-80 border-2 border-[#00ff94] flex items-center justify-between px-2.5 py-3 bg-black/50 jakarta text-white text-base underline font-semibold">
            <span>F8jePryFizz........rMe8rMye2GX</span>
            <IoCopyOutline className="text-lg me-2 cursor-pointer" />
          </Box>
          <Box className="hidden sm:flex">
            <StyledButton title={"Contract"} />
          </Box>
        </Box>

        <Box className="flex item-center w-fit gap-x-10 mt-8">
          <StyledButton title={"Pinksale"} />
          <StyledButton title={"Access App"} />
        </Box>
      </Box>

      <Box className="w-full flex justify-between items-center mt-14">
        <Box className="flex gap-x-4 items-center">
          <CiDesktopMouse2 className="text-white text-xl" />
          <Typography className="orbitron text-white text-base">
            Scroll to Explore
          </Typography>
        </Box>
        <Box>
          <Typography className="orbitron text-white text-base">
            Follow More
          </Typography>
          <Box className="flex gap-x-2 items-center">
            {["X", "Medium", "Telegram"].map((social, i) => (
              <>
                <Typography className="orbitron text-white text-base" key={i}>
                  {social}
                </Typography>
                <Box className="bg-white w-2 h-2 rounded-full" />
              </>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ICO Box */}

      {/* <Grid container className="pt-20">
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          className="px-2 h-fit lg:h-full flex items-center"
        >
          <Box>
            <Box className="flex items-center gap-x-2 pt-4">
              {socialLinks.map((link, i) => (
                <Link key={i} className="no-underline" to={link.link}>
                  <img src={link.icon} alt="link" className="h-6 w-auto" />
                </Link>
              ))}
            </Box>
            <Typography className="poppins font-bold w-[95%] text-center sm:text-left text-white text-2xl sm:text-6xl pt-4">
              Unleash the Future of Finance with
            </Typography>
            <Typography
              aria-label="Gold Investment"
              className="poppins font-bold w-[95%] text-[#f3ba2f] text-center sm:text-left text-2xl sm:text-6xl mb-4 h-16"
            >
              {text}
            </Typography>
            <Typography className="poppins font-light w-full sm:w-3/4 pt-10 text-[#e1e0e0] text-base text-center sm:text-left">
              Our Initial Coin Offering (ICO) is your exclusive opportunity to
              be a pioneer in the crypto revolution. By participating in our
              ICO, you become a key player in the growth of InfinitiCoin, an
              innovative platform at the intersection of DeFi, NFTs, and Gold
              Investment.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className="px-0 sm:px-2">
          <PresaleBox />
        </Grid>
      </Grid> */}
      {/* End ICO Box */}
    </Box>
  );
};

export default Presale;
