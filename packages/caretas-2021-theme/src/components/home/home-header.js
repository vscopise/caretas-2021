import React from 'react';
import { connect, styled } from 'frontity';
import HomeHeaderBlock from './home-header-block';
import Clearfix from '../utility/clearfix';


const HomeHeader = ({ state }) => {
    const data = state.source.get(state.router.link);
    const height = [461, 261, 198, 198];

    if (data.isReady) {
        const postsInZone = state.source.data[state.router.link].homeData.zones[0];
        return (
            <Container>
                <Clearfix>
                    <Col w={56} pr={1} position={0} height={height[0]}>
                        <HomeHeaderBlock postId={postsInZone[0]} position={0} />
                    </Col>
                    <Col w={44} pl={1}>
                        <Col mb={2} height={height[1]}>
                            <HomeHeaderBlock postId={postsInZone[1]} position={1} />
                        </Col>
                        <Col >
                            <Col w={50} pr={1} height={height[2]}>
                                <HomeHeaderBlock postId={postsInZone[2]} position={2} />
                            </Col>
                            <Col w={50} pl={1} height={height[3]}>
                                <HomeHeaderBlock postId={postsInZone[3]} position={3} />
                            </Col>
                        </Col>
                    </Col>
                </Clearfix>
            </Container>
        );
    } else { return null; }
}

export default connect(HomeHeader);

const Container = styled.div`
    margin-bottom: 20px;
    @media only screen and (min-width: 980px) {
        margin-bottom: 48px;
    } 
`;

const Col = styled.div`
    margin-bottom: 20px;
    @media only screen and (min-width: 980px) {
        float: left;
        overflow: hidden;
        width: ${props => props.w ? props.w : '100'}%;
        height: ${props => props.height ? `${props.height}px` : 'unset'};
        padding-right: ${props => props.pr ? props.pr : '0'}px;
        padding-left: ${props => props.pl ? props.pl : '0'}px;
        margin-bottom: ${props => props.mb ? props.mb : '0'}px;
    }
`;