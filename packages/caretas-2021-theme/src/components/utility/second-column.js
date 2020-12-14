import React from 'react';
import { styled } from 'frontity';

const SecondColumn = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default SecondColumn;

const Container = styled.div`
    width: 100%;
    display: block;
    overflow: hidden;
    float: left;
    @media only screen and (min-width: 980px) {
        width: 31.66%;
    } 
`;