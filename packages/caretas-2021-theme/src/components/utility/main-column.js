import React from 'react';
import { styled } from 'frontity';

const MainColumn = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default MainColumn;

const Container = styled.div`
    width: 100%;
    display: block;
    overflow: hidden;
    float: left;
    @media only screen and (min-width: 980px) {
        width: 65.83%;
        margin-right: 2.5%;
    } 
`;