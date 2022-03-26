import React from 'react';
import Luckyproduct from '../Luckyproduct/Luckyproduct';
import './LuckyBtn.css'
const LuckyBtn = ({ chooseOne, luckyItem, chooseAgain }) => {
    console.log({ chooseAgain });
    const { name, img } = luckyItem;
    console.log(name);
    return (
        <div className='choose-btn'>

            <div>
                <button onClick={chooseOne} className='choose-one'>Choose One For Me</button>
            </div>
            <Luckyproduct luckyItem={luckyItem}></Luckyproduct>
            <div>
                <button onClick={chooseAgain} className='choose-again'>Choose Again</button>

            </div>



        </div>
    );
};

export default LuckyBtn;