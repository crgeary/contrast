import React, { FC, ReactNode } from "react";

import { SR } from "../SR/SR";

import "./Popup.scss";

type PopupProps = {
  children: ReactNode;
  closePopup: () => void;
};

export const Popup: FC<PopupProps> = ({ children, closePopup }) => {
  return (
    <div className="popup">
      <div className="popup__backface" onClick={closePopup}></div>
      <div className="popup__window">
        {children}
        <button onClick={closePopup} className="popup__close">
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
            ></path>
          </svg>
          <SR>Close</SR>
        </button>
      </div>
    </div>
  );
};
