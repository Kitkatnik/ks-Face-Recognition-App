import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt>
                <div className="Tilt br2 shadow-2" options={{max: 55}} style={{ height: '150px', width: '150px' }}>
                    <div className="tilt-inner pa3">
                        <img src={brain} alt='logo' style={{paddingTop: '20px'}} />
                    </div>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
