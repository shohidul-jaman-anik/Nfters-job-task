import React from 'react';
import art1 from "../../../Asset/Other/art1.svg";
import art2 from "../../../Asset/Other/art2.svg";
import "./NftArt.css";


const NftArt = () => {
    return (
        <div className='nftArtMainContainer container'>
            <div className='nftArtContainer '>
                <div>
                    <h2>THE AMAZING NFT ART OF THE WORLD HERE</h2>
                </div>
                <div>
                    <div className='flex'>
                        <img src={art1} alt="" className='mr-2' />
                        <h5>Fast Transaction</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                </div>
                <div>
                    <div className='flex'>
                        <img src={art2} alt="" className='mr-2' />
                        <h5>Growth Transaction</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</p>
                </div>
            </div>
        </div>
    );
};

export default NftArt;