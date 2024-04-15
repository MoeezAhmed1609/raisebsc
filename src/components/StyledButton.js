import React from "react";

const StyledButton = ({ title }) => {
  return (
    <button
      class="relative notched-button bg-transparent jakarta min-w-[160px] font-bold active:scale-90 hover:brightness-125 transition-all inline-block outline-none overflow-hidden text-base px-3.5 py-0 drop-shadow-notched-button"
      type="button"
    >
      <span class="notched-button-background bg-gradient-4"></span>
      <div class="inline-flex h-full z-10 relative px-2.5 py-3.5 justify-center items-center">
        {title || "Launch App"}
      </div>
    </button>
  );
};

export default StyledButton;
