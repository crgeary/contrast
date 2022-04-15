import React, { ComponentPropsWithoutRef, FC } from "react";

import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";

import "./Header.scss";

type HeaderProps = ComponentPropsWithoutRef<"div"> & {
  doDarkModeToggle: () => void;
};

export const Header: FC<HeaderProps> = ({
  children,
  doDarkModeToggle,
  ...props
}) => {
  return (
    <div className="header" {...props}>
      <div className="container">
        <ThemeSwitch doDarkModeToggle={doDarkModeToggle} />
        {children}
      </div>
    </div>
  );
};
