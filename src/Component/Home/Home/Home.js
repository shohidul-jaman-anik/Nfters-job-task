import React from 'react';
import Banner from '../Banner/Banner';
import NftArt from '../NftArt/NftArt';
import Features from '../Features/Features';
import Nfts from '../Nfts/Nfts';
import SellNfts from '../SellNfts/SellNfts';
import NftCollection from '../NftCollection/NftCollection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NftArt></NftArt>
            <NftCollection></NftCollection>
            <Features></Features>
            <SellNfts></SellNfts>
            <Nfts></Nfts>
        </div>
    );
};

export default Home;