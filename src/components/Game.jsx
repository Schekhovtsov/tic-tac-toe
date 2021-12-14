import React, {useState} from 'react';
import cl from './Game.module.css';
import Board from './Board';
import {calculateWinner}  from '../helper';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const [move, setMove] = useState(0)

    const handleClick = index => {
        const boardCopy = [...board];
        // Определить, был ли клик по ячейке или игра закончена
        if (winner || boardCopy[index]) return;
        // Определить чей ход и ставить его фигуру - X или 0
        boardCopy[index] = xIsNext ? 'X' : '0';
        // Обновить стейт
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
        setMove(move + 1);
    }

    const startNewGame = () => {
        return (
            <button className={cl.startButton}
                    onClick={() => {
                        setBoard(Array(9).fill(null));
                        setMove(0);
                    }}>
                Начать новую игру
            </button>
        )
    }

    const whoIsNext = () => {

        const gameStatus = () => {
            if (winner) return 'Победитель: ' + winner;
            if (move === 9) {
                return 'Ничья!';
            } else  {
                return 'Сейчас ходят: ' + (xIsNext ? 'X' : '0');
            }
        }

        return (
            <div className={cl.whoIsNext}>
                {
                    gameStatus()
                }
            </div>
        )
    }

    return (
        <div className={cl.wrapper}>
            { winner ? startNewGame() : (move === 9 && startNewGame()) }
            <Board squares={board} click={handleClick}/>
            { whoIsNext() }
        </div>
    );
};

export default Game;