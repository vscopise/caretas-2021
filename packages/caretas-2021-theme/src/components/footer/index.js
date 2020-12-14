import React from 'react';
import { connect, styled } from 'frontity';
import WrapperInner from '../utility/wrapper-inner';

const Footer = ({ state }) => {
    const options = { year: 'numeric' };
    const date = new Date().toLocaleDateString('es-ES', options);
    return (
        <Container>
            <WrapperInner>
                <h4>&copy; {date} - {state.theme.copyright}</h4>
            </WrapperInner>
        </Container>
    );
};

export default connect(Footer);

const Container = styled.div`
    font-size: 0.75rem;
    color: #fff;
    padding: 0.625rem 0;
    background: #333;
    text-transform: uppercase;
    overflow: hidden;
`;