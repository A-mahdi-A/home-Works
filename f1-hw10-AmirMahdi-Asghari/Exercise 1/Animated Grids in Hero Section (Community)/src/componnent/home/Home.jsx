import React, { useState } from 'react';
import LogoImg from '../../assets/imgs/Frame 1.png';
import UpLogo from '../../assets/imgs/ant-design_cloud-upload-outlined.png';
import arow from '../../assets/imgs/bi_arrow-90deg-down.png';

const HomePage = () => {

    return (
        <>
            <header>
                <div className='Logo'><img src={LogoImg} alt="" /></div>
                <div className='meno'><ul>
                    <li className='dif-color'><a href="#">Home</a></li>
                    <li><a href="#">PC Wallpapers</a></li>
                    <li><a href="#">Phone Wallpaers</a></li>
                    <li><a href="#">4k Wallpapers</a></li></ul></div>
                <div className='UploadButton'><a href="#"><div><img src={UpLogo} alt="" /></div><div><h4>Upload</h4></div></a></div>
            </header>
            <section>
                <aside className='L-Side'>
                    <div><div>Best 4k</div>
                        <div>Wallpapers!</div>
                    </div>
                    <div><h2>for the People, by the People.</h2></div>
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis posuere mi tellus et dictum nam.</p></div>
                    <div className='button-Explore'>
                        <div><img src={arow} alt="" /><h5>Explore Wallpapers</h5></div>
                        <div>Know more</div>
                    </div>
                </aside>
                <aside className='R-Side'></aside>
            </section>
        </>
    );
}
export default HomePage;