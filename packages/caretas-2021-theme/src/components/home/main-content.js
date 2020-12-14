import React from 'react';
import { connect, styled } from 'frontity';
import GridCategory from './grid-category';
import DestacadasMedia from './destacadas-media';


import Clearfix from '../utility/clearfix';
import MainColumn from '../utility/main-column';
import SecondColumn from '../utility/second-column';


const MainContent = ({ state }) => {
    return (
        <Container>
            <Clearfix>
                <Main>
                    <DestacadasMedia />
                    <GridCategory category='deportes' right />
                    <GridCategory category='internacionales' />
                    <GridCategory category='sociedad' right />
                    <GridCategory category='cultura-y-espectaculos' />

                </Main>
                <Second>
                    second
                </Second>
            </Clearfix>
        </Container>
    );
};

export default connect(MainContent);

const Container = styled.div`
    margin-bottom: 20px;
    @media only screen and (min-width: 980px) {
        margin-bottom: 48px;
    } 
`;

const Main = styled(MainColumn)`
    float: right;
`;

const Second = styled(SecondColumn)`
    float: left;
`;