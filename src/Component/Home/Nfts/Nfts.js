import React from 'react';
import feature1 from "../../../Asset/Nfts/features1.svg";
import feature2 from "../../../Asset/Nfts/features2.svg";
import feature3 from "../../../Asset/Nfts/features3.svg";
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
            img: feature3,
            title: "ArtCrypto",
            eth: "0.25 ETH",
            person: "1 of 321",
            time: "3h 50m 2s left"
        },

    ]
    // const [nfts, setNfts] = useState([])
    // useEffect(() => {
    //       fetch()
    // }, [])

    return (

        <div className='mainNftsContainer container'>
            <h1 className='nftsTitle'>Discover more NFTs</h1>

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
