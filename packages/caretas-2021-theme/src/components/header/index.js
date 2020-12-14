import React from 'react';
import { connect, styled } from 'frontity';
import Clearfix from '../utility/clearfix';
import MainLogo from './main-logo';
import AdSlot from '../ad-slot';
import MenuHeader from './menu-header';
import { SubHeader } from './sub-header';

const Header = () => (
    <Container>
        <Clearfix padding={'20px 0'}>
            <HeaderLogo>
                <MainLogo />
            </HeaderLogo>
            <HeaderAd>
                <AdSlot name='top-header' />
            </HeaderAd>
        </Clearfix>
        <Clearfix>
            <MenuHeader />
        </Clearfix>
        <Clearfix>
            <SubHeader /> 
        </Clearfix>
    </Container>
);

export default connect(Header);

const Container = styled.div`
    margin-bottom: 30px;
`;

const HeaderLogo = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 27%;
    @media (max-width: 980px) {
        text-align: center;
        width: 100%;
    }
`;

const HeaderAd = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 71.83%;
    margin-left: 0.5%;
    float: right;
    @media (max-width: 980px) {
        text-align: center;
        width: 100%;
    }
`;