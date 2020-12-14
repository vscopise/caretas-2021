import React from 'react';
import HomeHeader from './home-header';
import BotonEdicionImpresa from './boton-edicion-impresa';
import ColumnasDeOpinion from './columnas-de-opinion';
import ImportantesEditorial from './importantes-editorial';
import MainContent from './main-content';

const Home = () => (
    <>
        <HomeHeader />
        <BotonEdicionImpresa />
        <ColumnasDeOpinion />
        <ImportantesEditorial />
        <MainContent />
    </>
);

export default Home;