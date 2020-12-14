import { styled } from 'frontity';
import NewsTicker from './news-ticker';
import SocialButtons from './social-buttons';

export const SubHeader = () => (
    <Container>
        <NewsTicker />
        <SocialButtons />
    </Container>
);

const Container = styled.div`
    padding: 10px;
    text-transform: uppercase;
    overflow: hidden;
    background: #efefef;
    font-family: 'Oswald',Helvetica,Arial,sans-serif;
`;