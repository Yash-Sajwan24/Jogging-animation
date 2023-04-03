import React from 'react';
import './App.css';
import Lottie from 'lottie-react';
import manrun from './media/manrun.json';

const App = () => {
    return (
        <div className='sky'>
            <div className='manrun'>
                <Lottie animationData={manrun} />
            </div>
            <div className='mountain'></div>
            <div className='grass'>
            </div>
            <h1>Jogging</h1>
        </div>
        
        
    )
};

export default App;