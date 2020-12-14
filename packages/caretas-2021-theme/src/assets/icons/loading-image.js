import React from 'react';
import {styled, keyframes} from 'frontity';

const preloadAnimation = keyframes`
    from {
        background-position: -468px 0
    }
    to {
        background-position: 468px 0
    }
`;

const LoadingImage = ({size}) => (
    <Container size={size} />
);

export default LoadingImage;

const Container = styled.div`
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${preloadAnimation};
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 1000px 104px;
    height: ${props => props.size}px;
    position: relative;
    overflow: hidden;
`;