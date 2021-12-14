import React from 'react';
import cl from './Board.module.css';
import Square from './Square';

const Board = ({squares, click}) => {

    return (
        <div className={cl.board}>
            {
                squares.map((square, index) =>
                    <Square key={index}
                            value={square}
                            click={() => click(index)} />

                )
            }
        </div>
    );
};

export default Board;