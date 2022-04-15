import cn from "classnames";
import React, { ComponentPropsWithoutRef, FC } from "react";

import "./Controls.scss";

export const Controls: FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("controls", className)} {...props}>
      <div className="container">{children}</div>
    </div>
  );
};
