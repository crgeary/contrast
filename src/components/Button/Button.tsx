import React, { ComponentPropsWithoutRef, FC } from 'react';
import cn from 'classnames';

import './Button.scss';

export const Button: FC<ComponentPropsWithoutRef<'button'>> = ({ className, ...props }) => {
    return <button type="submit" className={cn('button button--primary', className)} {...props} />;
};
