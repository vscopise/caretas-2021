import React from 'react';
import {styled} from 'frontity';

const WidgetTitle = ({title}) => (
    <Container>
        <ContainerInner>{title}</ContainerInner>
    </Container>
)

export default WidgetTitle;

const Container = styled.h4`
    padding: 0;
    margin-bottom: 20px;
    margin: 0 0 15px;
    font-size: 14px;
    line-height: 14px;
    position: relative;
    text-transform: uppercase;
    & :after {
        top: inherit;
        bottom: 0;
        height: 2px;
        margin-top: 0;
        background-color: #dd0000;
        content: '';
        display: inline-block;
        position: absolute;
        left: 0;
        width: 100%;
    }
`;

const ContainerInner = styled.span`
    padding: 0 10px;
    background: #dd0000;
    line-height: 24px;
    color: #fff;
    border-radius: 5px 5px 0 0;
`;