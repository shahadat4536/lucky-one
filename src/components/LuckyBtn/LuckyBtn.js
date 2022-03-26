import React from 'react';
import LuckyProduct from '../LuckyProduct/LuckyProduct';
import './LuckyBtn.css'
const LuckyBtn = ({ chooseOne, luckyItem, chooseAgain }) => {
    console.log({ chooseAgain });
    const { name } = luckyItem;
    console.log(name);
    return (
        <div className='choose-btn'>

            <div>
                <button onClick={chooseOne} className='choose-one'>Choose One For Me</button>
            </div>
            <LuckyProduct luckyItem={luckyItem}></LuckyProduct>
            <div>
                <button onClick={chooseAgain} className='choose-again'>Choose Again</button>

            </div>



        </div>
    );
};

export default LuckyBtn;