import React from 'react';
import blackEth from "../../../Asset/NftCollection/blackEth.svg";
import leftMain from "../../../Asset/NftCollection/leftMain.svg";
import center1 from "../../../Asset/NftCollection/middle1.svg";
import center2 from "../../../Asset/NftCollection/middle2.svg";
import center3 from "../../../Asset/NftCollection/middle3.svg";
import personLeft from "../../../Asset/NftCollection/personLeft-1.svg";
import person from "../../../Asset/Nfts/Ellipse 95.svg";

import "./NftCollection.css";

const NftCollection = () => {
    return (
        <div className='nftCollectionContainer container'>
            <div>
                <div className='flex'>
                    <img src={leftMain} alt="" />
                </div>

                <div className='leftDescription'>
                    <div className='flex'>
                        <img src={personLeft} alt="" />
                        <div >
                            <h5>The Futr Abstr</h5>
                            <p>10 in the stock</p>
                        </div>
                    </div>
                    <div>
                        <p>Highest Bid</p>
                        <div className='flex'>
                            <img src={blackEth} alt="" />
                            <h3>0.25 ETH</h3>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className='flex'>
                    <img src={center1} alt="" />
                    <div className='ml-3'>
                        <h5>The Futr Abstr</h5>
                        <div className='flex justify-around my-2'>
                            <img src={person} alt="" />
                            <p className='ethBtn'>0.25 ETH</p>
                            <p>1 of 8</p>
                        </div>
                        <button className='bidBtn'>Place a bid</button>
                    </div>
                </div>
                <div className='flex my-5'>
                    <img src={center2} alt="" />
                    <div className='ml-3'>
                        <h5>The Futr Abstr</h5>
                        <div className='flex justify-around my-2'>
                            <img src={person} alt="" />
                            <p className='ethBtn'>0.25 ETH</p>
                            <p>1 of 8</p>
                        </div>
                        <button className='bidBtn'>Place a bid</button>
                    </div>
                </div>
                <div className='flex'>
                    <img src={center3} alt="" />
                    <div className='ml-3'>
                        <h5>The Futr Abstr</h5>
                        <div className='flex justify-around my-2'>
                            <img src={person} alt="" />
                            <p className='ethBtn'>0.25 ETH</p>
                            <p>1 of 8</p>
                        </div>
                        <button className='bidBtn'>Place a bid</button>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img src="" alt="" srcset="" />
                    <h5>CryptoFunks</h5>
                    <div>
                        <img src="" alt="" />
                        <p>19,769.39</p>
                    </div>
                    <h2>+26.52%</h2>
                </div>
            </div>
        </div>
    );
};

export default NftCollection;