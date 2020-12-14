import React from 'react';
import { connect, styled } from 'frontity';
import { SocialIcon } from 'react-social-icons';

const SocialButtons = ({ state }) => {
    return (
        <Container>
            {
                state.theme.social.map(net => {
                    return (
                        <Icon 
                            key={net.id} 
                            network={net.id} 
                            url={net.url} 
                            style={{ height: 32, width: 32 }} 
                        />
                    )
                })
            }
        </Container>
    )
}

export default connect(SocialButtons);

const Container = styled.div`
    float: right;
`;

const Icon = styled(SocialIcon)`
    margin-left: 5px;
`;