import React from "react";
import { Box, Typography } from "@mui/material";
import bnb from "../../assets/bnb.png";
import tether from "../../assets/tether.png";

const PresaleBox = () => {
  return (
    <Box className="min-h-screen w-full rounded-[30px] border ico-box-bg flex flex-col items-center px-8 pt-4 pb-8">
      <Typography className="poppins font-bold w-full text-white text-4xl text-center">
        InfinitiCoin Pre-Sale
      </Typography>
      <Typography className="poppins w-full text-white text-lg text-center pt-8">
        Phase 1 ends in:
      </Typography>
      <Box className="flex w-full items-center justify-between gap-x-1 sm:gap-x-3 py-4">
        {["Days", "Hours", "Minutes", "Seconds"].map((elem) => (
          <>
            <Box className="text-white font-bold poppins text-base sm:text-4xl">
              10
            </Box>
            <Typography className="text-xs sm:text-base poppins text-center font-semibold capitalize text-white">
              {elem}
            </Typography>
          </>
        ))}
      </Box>
      <Box className="w-full bg-[#929292] rounded-full py-1 text-center text-white poppins text-sm">
        Next phase pricing = $0.006250
      </Box>
      <Box className="w-full flex flex-col items-center py-6">
        <Typography className="poppins w-full text-white text-base text-center">
          USD Raised = <span className="text-[#f3ba2f]">$5941.4 / $400000</span>
        </Typography>
        <Typography className="poppins w-full text-white text-base text-center">
          Minimum purchase = <span className="text-[#f3ba2f]">5000 INCO</span>
        </Typography>
        <Typography className="poppins w-full text-white text-base text-center">
          1 INCO = <span className="text-[#f3ba2f]">$0.005</span>
        </Typography>
        <Typography className="poppins w-full text-[#929292] text-base text-center">
          Listing Price = TBD
        </Typography>
      </Box>
      <div className="flex mb-9 text-[#adb0bc] gap-x-6 justify-between items-center w-full">
        <div className="cursor-pointer w-1/2 gap-x-2 border-2 border-white bg-[#f3ba2f] rounded-lg py-2 px-6 flex justify-center items-center">
          <img src={bnb} className="h-[30px] w-[30px]" alt="" />
          <Typography className="poppins text-white text-base">BNB</Typography>
        </div>
        <div className="cursor-pointer w-1/2 gap-x-2 border-2 border-white bg-[#26a17b] rounded-lg py-2 px-6 flex justify-center items-center">
          <img src={tether} className="h-[30px] w-[30px]" alt="" />
          <Typography className="poppins text-white text-base">USDT</Typography>
        </div>
      </div>
      <div className="flex flex-col w-full gap-y-2">
        <Typography className="poppins text-white text-base">
          Amount in BNB You Pay:
        </Typography>
        <input
          type="text"
          placeholder={`0`}
          className="text-lg w-full ps-1.5 py-1 rounded-sm text-black mb-[2px] ps-4"
        />
        <Typography className="poppins text-white text-base">
          Amount in INCO You Receive:
        </Typography>
        <input
          type="text"
          placeholder="0"
          className="text-lg w-full ps-1.5 py-1 rounded-sm text-black ps-4"
        />
        <button className="w-full h-fit rounded-md py-2.5 px-6 mt-2 bg-[#26a17b] text-white uppercase">
          Connect Wallet
        </button>
      </div>
    </Box>
  );
};

export default PresaleBox;
