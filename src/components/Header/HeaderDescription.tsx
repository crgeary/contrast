import React, { ComponentPropsWithoutRef, FC } from "react";

export const HeaderDescription: FC<ComponentPropsWithoutRef<"div">> = ({
  children,
  ...props
}) => {
  return (
    <div className="header__description" {...props}>
      <p>{children}</p>
    </div>
  );
};
