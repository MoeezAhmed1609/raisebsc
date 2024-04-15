import React from "react";
import { Box, Typography } from "@mui/material";
import bg from "../../assets/padbg.webp";
import geo from "../../assets/pag-geo.svg";
import videoPlayer from "../../assets/video-player.webp";
import StyledButton from "../StyledButton";

const About = () => {
  return (
    <Box
      className="w-full 2xl:max-w-[1120px] relative h-fit bg-no-repeat bg-cover bg-center pt-36 px-5 sm:px-10 flex flex-col items-center justify-center"
      sx={{ backgroundImage: `url(${bg})` }}
    >
      <Box
        className="w-full h-[75vh] bg-no-repeat bg-cover bg-center absolute top-0 left-0"
        sx={{ backgroundImage: `url(${geo})` }}
      />
      <Typography className="jakarta uppercase text-[#f3ba2f] text-base font-semibold pb-3 tracking-widest flex flex-col justify-center ps-2">
        About
      </Typography>
      <Typography className="orbitron font-semibold uppercase text-white text-5xl">
        WHAT IS FLASHPAD?
      </Typography>
      <Typography className="jakarta py-10 text-white text-xl">
        Inspired by Thunder & Lighting, powering all utilities to run fast like
        a Flash.
      </Typography>
      <StyledButton title={"Learn More"} />
      <Box className="w-full relative flex flex-col items-center pt-20 sm:pt-0">
        <img className="w-full h-auto" src={videoPlayer} alt="video player" />
        <Box className="absolute top-7 md:top-[100px] lg:top-[150px] flex flex-col items-center">
          <Box className=" px-4 py-2 text-white font-semibold tracking-widest orbitron text-lg bg-[#242739] text-center flex items-center justify-center">
            Video intro
          </Box>
          <button class="hover:brightness-125 transition-all pt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="135"
              height="143"
              fill="none"
              class="scale-50  lg:scale-100"
            >
              <rect
                width="118"
                height="118"
                x="8.74"
                y="1"
                stroke="#F5DFC4"
                stroke-opacity="0.15"
                stroke-width="2"
                rx="59"
              ></rect>
              <rect
                width="102"
                height="102"
                x="16.74"
                y="9"
                fill="#0A071E"
                rx="51"
              ></rect>
              <g filter="url(#play_svg__a)">
                <rect
                  width="86"
                  height="86"
                  x="24.74"
                  y="17.001"
                  fill="url(#play_svg__b)"
                  rx="43"
                ></rect>
              </g>
              <path
                fill="#fff"
                d="m83.08 54.002-19.32-11.08a6.84 6.84 0 0 0-10.26 6v22.24a6.84 6.84 0 0 0 6.84 6.84 6.86 6.86 0 0 0 3.42-.92l19.32-11.08a6.84 6.84 0 0 0 0-11.84zm-2 8.38-19.32 11.24a2.88 2.88 0 0 1-2.84 0 2.84 2.84 0 0 1-1.42-2.46v-22.32a2.84 2.84 0 0 1 1.42-2.46 3 3 0 0 1 1.42-.38c.497.01.984.14 1.42.38l19.32 11.16a2.84 2.84 0 0 1 0 4.92z"
              ></path>
              <defs>
                <linearGradient
                  id="play_svg__b"
                  x1="24.74"
                  x2="110.74"
                  y1="60.001"
                  y2="60.001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F54200"></stop>
                  <stop offset="1" stop-color="#F5AF00"></stop>
                </linearGradient>
                <filter
                  id="play_svg__a"
                  width="134"
                  height="134"
                  x="0.74"
                  y="9.001"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dy="16"></feOffset>
                  <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_208_4263"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend
                    in2="effect1_dropShadow_208_4263"
                    result="effect2_dropShadow_208_4263"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_208_4263"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  ></feComposite>
                  <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.632 0 0 0 0 0.2 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="shape"
                    result="effect3_innerShadow_208_4263"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
