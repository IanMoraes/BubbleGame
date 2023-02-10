import { Button } from "@mui/material";
import React from "react";

export default function GameOver({ setGameState }) {
    return (
        <Button
            onClick={() => {
                setGameState(1);
            }}
        >
            Game over! Play Again
        </Button>
    );
}
