import './App.css'
import { useState } from "react";
import Area from "./Area.jsx";
import Pad from "./Pad.jsx";

export default function App() {
    const [currentPosition, updatePosition] = useState({ left: 50, top: 50 });

    const areaLimits = (moveX, moveY) => {
        updatePosition(({ left, top }) => {
            const toMove = {
                left: left + moveX,
                top: top + moveY
            };
            if (toMove.left < 0) {
                toMove.left = 0;
            }
            if (toMove.left > 100) {
                toMove.left = 100;
            }
            if (toMove.top < 0) {
                toMove.top = 0;
            }
            if (toMove.top > 100) {
                toMove.top = 100;
            }
            return toMove;
        });
    };

    return (
        <>
            <Pad onMove={areaLimits} />
            <Area starting={currentPosition} />
        </>
    );
}
