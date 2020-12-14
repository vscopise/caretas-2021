import React from 'react';
import { styled, keyframes } from 'frontity';

const circleBounceDelay = keyframes`
    0%, 80%, 100% {transform: scale(0)}
    40% {transform: scale(1)}
`;

const Loading = ({size}) => (
    <Container size={size}>
        <Child />
        <Child item='2' />
        <Child item='3' />
        <Child item='4' />
        <Child item='5' />
        <Child item='6' />
        <Child item='7' />
        <Child item='8' />
        <Child item='9' />
        <Child item='10' />
        <Child item='11' />
        <Child item='12' />
    </Container>
);

export default Loading;


const Container = styled.div`
    margin: ${props => props.size/2 - 20}px auto;
    width: 40px;
    height: 40px;
    position: relative;
`;

const Child = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: ${props => props.item ? `rotate(${30 * (1 - props.item)}deg)` : 'unset'};
        -ms-transform: ${props => props.item ? `rotate(${30 * (1 - props.item)}deg)` : 'unset'};
        transform: ${props => props.item ? `rotate(${30 * (1 - props.item)}deg)` : 'unset'};
    & :before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #333;
        border-radius: 100%;
        
        -webkit-animation: ${circleBounceDelay} 1.2s infinite ease-in-out both;
                animation: ${circleBounceDelay} 1.2s infinite ease-in-out both;
        -webkit-animation-delay: ${props => props.item ? `${0.1 * props.item - 1.3}s` : 'unset'};
        animation-delay: ${props => props.item ? `${0.1 * props.item - 1.3}s` : 'unset'};
    }
`;