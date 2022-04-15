import cn from "classnames";
import React, { ComponentPropsWithoutRef, FC } from "react";

import "./Footer.scss";

export const Footer: FC<ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("footer", className)} {...props}>
      {children}
    </div>
  );
};
