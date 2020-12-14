import React from 'react';
import { connect, styled } from 'frontity';
import Clearfix from '../utility/clearfix';
import MainColumn from '../utility/main-column';
import SecondColumn from '../utility/second-column';
import PostBlock from '../post-block';

const ImportantesEditorial = ({ state }) => {
    const data = state.source.get(state.router.link);
    if (data.isReady) {
        return (
            <Container>
                <Clearfix>
                    <Main>
                        {
                            data.homeData.zones[1].map(postId => {
                                return (
                                    <GridContainer key={postId}>
                                        <PostBlock postId={postId} size='100' />
                                    </GridContainer>
                                )
                            })
                        }
                    </Main>
                    <Second>
                        <PostBlock 
                            postId={data.homeData.zones[2][0]}
                            title='Editorial'
                            padding='10'
                            background='#f2f0eb'
                            size='200'
                            excerpt
                        />
                    </Second>
                </Clearfix>
            </Container>
        );
    } else {
        return (<div>loading</div>)
    }
};

export default connect(ImportantesEditorial);

const Container = styled.div`
    margin-bottom: 20px;
    @media only screen and (min-width: 980px) {
        margin-bottom: 48px;
    } 
`;

const Main = styled(MainColumn)`
    float: right;
    & :before {
        content: " ";
        display: table;
    }
`;

const Second = styled(SecondColumn)`
    float: left;
`;

const GridContainer = styled.div`
    @media only screen and (min-width: 980px) {
        width: 25%;
        padding-right: 10px;
        float: left;
        & :nth-child(4n) {
            padding-right: 0;
        }
        & :nth-child(4n+1) {
            clear: left;
        }
    }
`;