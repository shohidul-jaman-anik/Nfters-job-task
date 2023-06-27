import React from 'react';
import Banner from '../Banner/Banner';
import NftArt from '../NftArt/NftArt';
import Features from '../Features/Features';
import Nfts from '../Nfts/Nfts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NftArt></NftArt>
            <Features></Features>
            <Nfts></Nfts>
        </div>
    );
};

export default Home;