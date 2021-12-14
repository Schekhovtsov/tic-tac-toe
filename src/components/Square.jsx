import React from 'react';
import cl from './Square.module.css';

const Square = ({value, click}) => {

    return (
        <button className={cl.square}
                onClick={click}
        >{value}</button>
    );
};

export default Square;