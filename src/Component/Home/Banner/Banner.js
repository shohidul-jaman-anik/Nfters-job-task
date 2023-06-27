import React from 'react';
import banner from "../../../Asset/Other/banner.svg";
import "./Banner.css";


const Banner = () => {
    return (
        <div id="banner" class="bannerContainer container">

            <div class="">
                <h1 class="BannerHeading">Discover, and collect Digital Art  NFTs </h1>
                <p class="bannerContent leading-normal ">
                    Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
                </p>
                <button class="primaryBtn">
                    Explore Now
                </button>

                <div className='countContainer'>
                    <div>
                        <h1>98k+</h1>
                        <p>Artwork</p>
                    </div>
                    <div>
                        <h1>12k+</h1>
                        <p>Auction</p>
                    </div>
                    <div>
                        <h1>15k+</h1>
                        <p>Artist</p>
                    </div>
                </div>

            </div>

            <div class=" bannerImg">
                <img src={banner} alt="" />
            </div>


        </div>
    );
};

export default Banner;