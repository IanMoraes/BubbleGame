import { Button } from "@mui/material";
import React from "react";

export default function Success({ setGameState }) {
    return (
        <Button
            onClick={() => {
                setGameState(1);
            }}
        >
            Success! Play Again
        </Button>
    );
}
