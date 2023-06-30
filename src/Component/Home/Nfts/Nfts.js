import React from 'react';
import filter from "../../../Asset/DiscoverNfts/filter-results-button.svg";
import feature1 from "../../../Asset/DiscoverNfts/green.svg";
import feature3 from "../../../Asset/DiscoverNfts/rainbow.svg";
import feature2 from "../../../Asset/DiscoverNfts/yellow.svg";
import "./Nfts.css";


const Nfts = () => {
    const Nfts = [
        {
            img: feature1,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature2,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature3,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature1,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature2,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature3,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature1,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature2,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature3,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        }, {
            img: feature1,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature2,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature3,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature1,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature2,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature3,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },
        {
            img: feature1,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },

    ]


    return (

        <div className='mainNftsContainer container'>
            <h1 className='nftsTitle'>DISCOVER MORE NFTS</h1>

            <div className='buttonContainer'>
                <div className='buttons'>
                    <button className='firstBtn'>All Categories</button>
                    <button>Art</button>
                    <button>Celebrities</button>
                    <button>Gaming</button>
                    <button>Sports</button>
                    <button>Music</button>
                    <button>Crypto</button>
                </div>
                <button className='filterBtn'>
                    <img src={filter} alt="" />
                    <p className='ml-2'>All Filters</p>
                </button>
            </div>

            <div className='nftsContainer'>
                {
                    Nfts.map(nft =>
                        <div className='nftCard'>
                            <div>
                                <img src={nft.img} alt="" />
                                <h5>{nft.title}</h5>
                                <div className='flex justify-between items-center pt-4 pb-6'>
                                    <p className='Eth'>{nft.eth}</p>
                                    <p>{nft.person}</p>
                                </div>

                                <hr className='h-3' />

                                <div className='flex justify-between'>
                                    <p className='time'>{nft.time}</p>
                                    <h6 className='bid'> Place a bid</h6>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div >
            <div className='moreNft'>
                <button className='moreNftBtn'>More NFTs</button>
            </div>
        </div>


    );
};

export default Nfts;
