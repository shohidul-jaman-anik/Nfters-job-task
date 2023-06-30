import React from 'react';
import fb from "../../../Asset/Social/facebook.svg";
import linkedIn from "../../../Asset/Social/linkedin.svg";
import twitter from "../../../Asset/Social/twitter.svg";
import "./Footer.css";


const Footer = () => {
    return (
        <div class="footerContainer container">
            <div class=" pt-16 ">


                <div class="footerLinks">

                    <div class="footerLeftSection">
                        <img src="./Asset/simplibill 1.png" alt='' />
                        <h2>NFTERS </h2>
                        <p className='footerLeftDes'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                        </p>
                        <div className='flex'>
                            <img className='pr-3 pt-5' src={fb} alt="" />
                            <img className='pr-3 pt-5' src={twitter} alt="" />
                            <img className='pr-3 pt-5' src={linkedIn} alt="" />
                        </div>
                    </div>

                    <div class="links">
                        <h5 class="">Market Place</h5>
                        <ul class="mt-2 space-y-2">

                            <li>
                                <a href="/" class="">All NFTs</a>
                            </li>
                            <li>
                                <a href="/" class="">New</a>
                            </li>
                            <li>
                                <a href="/" class="">Art</a>
                            </li>
                            <li>
                                <a href="/" class="">Sports</a>
                            </li>
                            <li>
                                <a href="/" class="">Utility</a>
                            </li>
                            <li>
                                <a href="/" class="">Music</a>
                            </li>
                            <li>
                                <a href="/" class="">Domain Name</a>
                            </li>
                        </ul>
                    </div>
                    <div class="links">
                        <h5 class="">My Account</h5>
                        <ul class="mt-2 space-y-2">
                            <li>
                                <a href="/" class="">Profile</a>
                            </li>
                            <li>
                                <a href="/" class="">Favorite</a>
                            </li>
                            <li>
                                <a href="/" class="">My Collections</a>
                            </li>
                            <li>
                                <a href="/" class="">Settings</a>
                            </li>
                        </ul>
                    </div>
                    <div class="links">
                        <h5 class="">Stay in the loop</h5>
                        <p>
                            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
                        </p>

                       
                    </div>
                </div>


                <div >
                    <hr class="mt-10  mb-6" />
                    <div class="flex justify-center pb-5 copyright">
                        <p class="">
                            Copyright © 2022 Avi Yansah
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;