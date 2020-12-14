import React from 'react';
import { styled } from 'frontity';
import Image from "@frontity/components/image";
import Link from '../link';
import Logo from '../../assets/images/logo_caras.png';

const MainLogo = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('es-ES', options);
    const localDate = `Montevideo, ${date}`;
    return (
        <>
            <Link link='/'>
                <StyledLogo src={Logo} />
            </Link>
            <StyledDate>{localDate}</StyledDate>
        </>
    );
}
export default MainLogo;

const StyledLogo = styled(Image)`
    margin: 10px auto;
`;

const StyledDate = styled.h6`
    text-align: center;
    color: #a6a6a6;
    font-size: 0.9em;
    padding-top: 15px;
`;