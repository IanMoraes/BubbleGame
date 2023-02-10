import React, { useEffect, useState } from "react";
import styles from "./Points.module.css";
import { motion } from "framer-motion";

export default function Points({ points }) {
    const [XPos, setXPos] = useState(0);

    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const handleXTransition = () => {
        const x = XPos == left ? 100 - right : left;
        setXPos(x);
    };
    useEffect(() => {
        setLeft(window.screenX);
        setRight(window.screenX + window.innerWidth);
    }, []);
    return (
        <motion.div
            animate={{ x: XPos, scale: 1 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={handleXTransition}
            initial={{ scale: 0.1 }}
            className={styles.points}
        >
            {points}
        </motion.div>
    );
}
