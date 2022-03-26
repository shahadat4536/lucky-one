import React from 'react';
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
            <div>
                <button onClick={chooseAgain} className='choose-again'>Choose Again</button>

            </div>
            <p>{name}</p>


        </div>
    );
};

export default LuckyBtn;