import {styled} from 'frontity';
import Clearfix from './clearfix';

const Wrapper = ({children, padding}) => (
    <Container p={padding}>
        <Clearfix>
            {children}
        </Clearfix>
    </Container>
);

export default Wrapper;

const Container = styled.div`
    padding: ${props => props.p};
    &:after {
        content: ".";
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
        margin: 0;
        padding: 0;
    }
    margin-bottom: 20px;
    @media only screen and (min-width: 980px) {
        margin-bottom: 48px;
    } 
`;