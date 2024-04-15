import React, { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

const MobileDrawer = ({ pages }) => {
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  return (
    <div className="flex md:flex lg:flex xl:hidden">
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon className="text-white text-2xl" />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="flex md:flex lg:flex xl:hidden"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpen(false)}
          className="flex h-full flex-col items-center px-3 py-6 gap-y-5 bg-[#0f131b] overflow-y-auto"
        >
          <img src={logo} alt="logo" className="w-fit h-12" />
         
          <Box className="w-full">
            {pages.map((page, i) => (
              <Link to={page.link} key={i} className="group">
                <Typography
                  key={i}
                  className={`text-lg text-white group-hover:text-black poppins capitalize group-hover:bg-white bg-[#0f131b] rounded-md ps-10 py-2.5`}
                >
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
