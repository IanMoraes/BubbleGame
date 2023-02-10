import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "/styles/Home.module.css";
import Link from "../components/Link/Link";
import Game from "../components/Game/Game";
import { Button } from "@mui/material";
import Success from "../components/Success/Success";
import GameOver from "../GameOver/GameOver";
const Index = () => {
    const [GameState, setGameState] = useState(0);
    return (
        <div className={styles.background}>
            {GameState == 0 && (
                <Button
                    onClick={() => {
                        setGameState(1);
                    }}
                >
                    Play
                </Button>
            )}

            {GameState == 1 && <Game setGameState={setGameState} />}

            {GameState == 2 && <Success setGameState={setGameState} />}

            {GameState == 3 && <GameOver setGameState={setGameState} />}
        </div>
    );
};

export default Index;
