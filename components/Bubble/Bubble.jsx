import { memo } from "react";
import styles from "./Bubble.module.css";
import { motion } from "framer-motion";
const Bubble = ({ x, y, onClick, color }) => {
    return (
        <motion.div
            onClick={onClick}
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            exit={{ scale: [2.2, 0] }}
            style={{ bottom: `${y}px`, right: `${x}px`, backgroundColor: color }}
            className={styles.bubble}
        ></motion.div>
    );
};

export default memo(Bubble);
