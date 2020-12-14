import {styled} from 'frontity';

const Clearfix = ({children, padding}) => (
    <Container p={padding}>
        {children}
    </Container>
);

export default Clearfix;

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
`;