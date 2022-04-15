import React, { ComponentPropsWithoutRef, FC } from "react";
import cn from "classnames";

import "./SR.scss";

export const SR: FC<ComponentPropsWithoutRef<"span">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span className={cn("sr", className)} {...props}>
      {children}
    </span>
  );
};
