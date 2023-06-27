import React from 'react';
import person from "../../../Asset/Nfts/Ellipse 95.svg";
import f1_1 from "../../../Asset/Nfts/f1-1.svg";
import f1_2 from "../../../Asset/Nfts/f1-2.svg";
import f1_3 from "../../../Asset/Nfts/f1-3.svg";
import f2_3 from "../../../Asset/Nfts/f2-3.svg";
import f3_1 from "../../../Asset/Nfts/f3-1.svg";
import f3_2 from "../../../Asset/Nfts/f3-2.svg";
import feature1 from "../../../Asset/Nfts/features1.svg";
import feature2 from "../../../Asset/Nfts/features2.svg";
import feature3 from "../../../Asset/Nfts/features3.svg";

import "./Features.css";


const Features = () => {
    return (
        <div className='container'>
            <h2>Collection Featured NFTs</h2>
            <div className='featureContainer'>
                <div>
                    <div className='flex'>
                        <img src={feature1} alt="" />
                        <div className=' ml-2'>
                            <img src={f1_1} alt="" className='mb-2' />
                            <img src={f1_2} alt="" className='mb-2' />
                            <img src={f1_3} alt="" className='mb-2' />
                        </div>
                    </div>
                    <h5>Amazing Collection</h5>
                    <div className='flex'>
                        <div className='flex'>
                            <img src={person} alt="" />
                            <p >by Arkhan</p>
                        </div>
                        <div>
                            <button className='secondaryBtn'>Total 54 Items</button>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='flex'>
                        <img src={feature2} alt="" />
                        <div className=' ml-2'>
                            <img src={f1_2} alt="" className='mb-2' />
                            <img src={f1_1} alt="" className='mb-2' />
                            <img src={f2_3} alt="" className='mb-2' />
                        </div>
                    </div>
                    <h5>Amazing Collection</h5>
                    <div className='flex'>
                        <div className='flex'>
                            <img src={person} alt="" />
                            <p >by Arkhan</p>
                        </div>
                        <div>
                            <button className='secondaryBtn'>Total 54 Items</button>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='flex'>
                        <img src={feature3} alt="" />
                        <div className=' ml-2'>
                            <img src={f3_1} alt="" className='mb-2' />
                            <img src={f3_2} alt="" className='mb-2' />
                            <img src={f1_1} alt="" className='mb-2' />
                        </div>
                    </div>
                    <h5>Amazing Collection</h5>
                    <div className='flex'>
                        <div className='flex'>
                            <img src={person} alt="" />
                            <p >by Arkhan</p>
                        </div>
                        <div>
                            <button className='secondaryBtn'>Total 54 Items</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;