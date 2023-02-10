import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./Game.module.css";
import Bubble from "../Bubble/Bubble";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "../Counter/Counter";
import Points from "../Points/Points";
import useSound from 'use-sound';
import uuid from "react-uuid";

const Game = ({ setGameState }) => {
    const [bubbles, setBubbles] = useState([]);
    const [points, setPoints] = useState(0);
    const [bubbleInterval, setBubbleInterval] = useState(1000);

    
  const [play] = useSound('/BubbleSound.mp3');


    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const incrementBubble = () => {
        let x = Math.floor(Math.random() * window.innerWidth) + 10;
        let y = Math.floor(Math.random() * window.innerHeight) + 10;
        let color = getRandomColor();
        let key = uuid();
        setBubbles((prevBubbles) => [...prevBubbles, { key: key, x: x, y: y, color: color }]);
    };

    useEffect(() => {
        let intervalId = setInterval(() => {
            incrementBubble();
        }, bubbleInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, [bubbleInterval]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBubbleInterval((prevBubbleInterval) => prevBubbleInterval * 0.9);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (Object.keys(bubbles).length == 200) setGameState(3);
    }, [bubbles]);
    const explodeBubble = (bubble) => {
        let key = bubble.key;
        setBubbles((bubbles) => bubbles.filter((bubble) => bubble.key !== key));
        setPoints(points + 1);
        play()
        if (points == 99) setGameState(2);
    };

    const mappedBubbles = useMemo(() => {
        return bubbles.map((bubble) => {
            return <Bubble onClick={() => explodeBubble(bubble)} key={bubble.key} x={bubble.x} y={bubble.y} color={bubble.color} />;
        });
    }, [bubbles]);

    return (
        <div className={styles.background}>
            <Points points={points} />
            <Counter bubbles={bubbles} />
            <AnimatePresence>{mappedBubbles}</AnimatePresence>
        </div>
    );
};

export default Game;
