import {styled} from 'frontity';

const WrapperInner = ({children}) => (
    <Container>
        {children}
    </Container>
);

export default WrapperInner;

const Container = styled.div`
    width: 90%;
    max-width: 1180px;
    margin: 0 auto;
`;