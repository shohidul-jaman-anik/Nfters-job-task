import React from 'react';
import bottom from "../../../Asset/SellNft/bottom.svg";
import right from "../../../Asset/SellNft/right.svg";
import top from "../../../Asset/SellNft/top.svg";
import "./SellNfts.css";

const SellNfts = () => {
    return (
        <div id="about" class="aboutContainer container">
            <div class="flex items-center ">
                <div>
                    <div>
                        <img src={top} alt="" />
                    </div>
                    <div >
                        <img src={bottom} class="ml-auto" alt="" />
                    </div>
                </div>
                <div className='ml-5'>
                    <img src={right} alt="" />
                </div>
            </div>

            <div class="aboutContentContainer ">

                <h1 class="aboutHeading">Create and sell your NFTs</h1>
                <p class="my-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
                </p>

                <button class="primaryBtn">
                    Sign Up Now
                </button>
            </div>

        </div>
    );
};

export default SellNfts;