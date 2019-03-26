import React from "react";
import styled from "styled-components";

import Swatch from "./Swatch";

const SwatchWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class Swatches extends React.Component {

    render() {
        const colors = this.props.colors;
        return (
            <div>
                <SwatchWrapper>
                    {colors.map((v, k) => (
                        <Swatch key={k} {...v} />
                    ))}
                </SwatchWrapper>
            </div>
        );
    }
}

export default Swatches;
