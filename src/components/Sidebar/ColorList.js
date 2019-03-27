import React from "react";
import styled from "styled-components";

const ItemBasic = ({ color, className, doRemoveColor }) => (
    <li className={className}>
        {color}
        <button onClick={() => doRemoveColor(color)}>&times;</button>
    </li>
);

const Item = styled(ItemBasic)`
    margin-bottom: 5px;

    &::before {
        content: '';
        width: 20px;
        height: 20px;
        display: inline-block;
        background-color: ${p => p.color};
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, .2);
        vertical-align: middle;
        margin-right: 10px;
    }
`

const ColorListBasic = ({ className, colors, doRemoveColor }) => (
    <ul className={className}>
        {colors.map((v, k) => (
            <Item
                key={k}
                color={v}
                doRemoveColor={doRemoveColor}
            />
        ))}
    </ul>
);

export default styled(ColorListBasic)`
    list-style: none;
    padding-left: 0;
`
