import { Slot, styled } from 'frontity';

const AdSlot = ({ name }) => {
    return (
        <Container>
            <Slot name={name} />
        </Container>
    );
}

export default AdSlot;

const Container = styled.div`
    text-align: center;
    & :before {
        content: 'PUBLICIDAD';
        font-family: arial,helvetica;
        font-size: 10px;
        color: #aaa;
        display: inherit;
        line-height: 10px;
        letter-spacing: 5px;
        margin-bottom: 5px;
    }
`;