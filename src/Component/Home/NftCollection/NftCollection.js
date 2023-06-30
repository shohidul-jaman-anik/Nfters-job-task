import React from 'react';
import blackEth from "../../../Asset/NftCollection/blackEth.svg";
import leftMain from "../../../Asset/NftCollection/leftMain.svg";
import center1 from "../../../Asset/NftCollection/middle1.svg";
import center2 from "../../../Asset/NftCollection/middle2.svg";
import center3 from "../../../Asset/NftCollection/middle3.svg";
import personLeft from "../../../Asset/NftCollection/personLeft-1.svg";
import right1 from "../../../Asset/NftCollection/right1.svg";
import right2 from "../../../Asset/NftCollection/right2.svg";
import right3 from "../../../Asset/NftCollection/right3.svg";
import right4 from "../../../Asset/NftCollection/right4.svg";
import right5 from "../../../Asset/NftCollection/right5.svg";
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
                            <img src={blackEth} alt=""  />
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
                            <p className='ethBtn mx-3'>0.25 ETH</p>
                            <p>1 of 8</p>
                        </div>
                        <button className='bidBtn '>Place a bid</button>
                    </div>
                </div>
                <div className='flex my-5'>
                    <img src={center2} alt="" />
                    <div className='ml-3'>
                        <h5>The Futr Abstr</h5>
                        <div className='flex justify-around my-2'>
                            <img src={person} alt="" />
                            <p className='ethBtn mx-3'>0.25 ETH</p>
                            <p>1 of 8</p>
                        </div>
                        <button className='bidSecondBtn'>Place a bid</button>
                    </div>
                </div>
                <div className='flex'>
                    <img src={center3} alt="" />
                    <div className='ml-3'>
                        <h5>The Futr Abstr</h5>
                        <div className='flex justify-around my-2'>
                            <img src={person} alt="" />
                            <p className='ethBtn mx-3'>0.25 ETH</p>
                            <p>1 of 8</p>
                        </div>
                        <button className='bidSecondBtn'>Place a bid</button>
                    </div>
                </div>
            </div>



            <div>
                <div>
                    <div className='topCollection'>
                        <h2>1</h2>
                        <img src={right1} alt="" srcset="" className='mx-4' />
                        <div>
                            <h5>CryptoFunks</h5>
                            <div className='flex'>
                                <img src={blackEth} alt="" className='mr-2' />
                                <p>19,769.39</p>
                            </div>
                        </div>
                        <h2 className='ml-auto greenPersent'>+26.52%</h2>
                    </div>

                    <hr className='my-5' />
                </div>
                <div>
                    <div className='topCollection'>
                        <h2>2</h2>
                        <img src={right2} alt="" srcset="" className='mx-4' />
                        <div>
                            <h5>Cryptix</h5>
                            <div className='flex'>
                                <img src={blackEth} alt="" className='mr-2' />
                                <p>2,769.39</p>
                            </div>
                        </div>
                        <h2 className='ml-auto redPersent'>+10.52%</h2>
                    </div>

                    <hr className='my-5' />
                </div>
                <div>
                    <div className='topCollection'>
                        <h2>3</h2>
                        <img src={right3} alt="" srcset="" className='mx-4' />
                        <div>
                            <h5>Frensware</h5>
                            <div className='flex'>
                                <img src={blackEth} alt="" className='mr-2' />
                                <p>9,232.39</p>
                            </div>
                        </div>
                        <h2 className='ml-auto greenPersent'>+2.52%</h2>
                    </div>

                    <hr className='my-5' />
                </div>
                <div>
                    <div className='topCollection'>
                        <h2>4</h2>
                        <img src={right4} alt="" srcset="" className='mx-4' />
                        <div>
                            <h5>PunkArt</h5>
                            <div className='flex'>
                                <img src={blackEth} alt="" className='mr-2' />
                                <p>3,769.39</p>
                            </div>
                        </div>
                        <h2 className='ml-auto greenPersent'>+1.52%</h2>
                    </div>

                    <hr className='my-5' />
                </div>
                <div>
                    <div className='topCollection'>
                        <h2>5</h2>
                        <img src={right5} alt="" srcset="" className='mx-4' />
                        <div>
                            <h5>Art Crypto</h5>
                            <div className='flex'>
                                <img src={blackEth} alt="" className='mr-2' />
                                <p>10,769.39</p>
                            </div>
                        </div>
                        <p className='ml-auto redPersent'>+2.52%</p>
                    </div>

                    <hr className='my-5' />
                </div>
            </div>
        </div>
    );
};

export default NftCollection;