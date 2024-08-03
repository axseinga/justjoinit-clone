"use client";

import React from "react";
import { Theme, useTheme } from "@mui/material/styles";

export const IconYoutube = () => {
  const theme: Theme = useTheme();
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.9935 4C11.9935 4 5.11765 4 3.39163 4.44918C2.9283 4.58377 2.50686 4.83411 2.16702 5.17661C1.82719 5.5191 1.58015 5.94249 1.44918 6.40686C1 8.13179 1 11.7056 1 11.7056C1 11.7056 1 15.2947 1.44918 16.9914C1.57846 17.455 1.82516 17.8775 2.16543 18.218C2.5057 18.5584 2.92804 18.8054 3.39163 18.9349C5.13179 19.3971 11.9935 19.3971 11.9935 19.3971C11.9935 19.3971 18.8823 19.3972 20.6083 18.948C21.0723 18.8224 21.4949 18.5767 21.8337 18.2356C22.1724 17.8946 22.4153 17.4703 22.5377 17.0055C23 15.2936 23 11.7198 23 11.7198C23 11.7198 23.013 8.1307 22.5377 6.40686C22.4148 5.94357 22.1716 5.52101 21.8328 5.18198C21.494 4.84296 21.0716 4.59954 20.6083 4.47637C18.8823 4 11.9935 4 11.9935 4ZM9.80521 8.4026L15.526 11.7046L9.80521 14.9935V8.4026Z"></path>
    </svg>
  );
};