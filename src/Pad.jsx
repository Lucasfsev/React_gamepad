export default function Pad({ onMove }) {
    return (
        <div id="gamepad">
            <button onClick={() => onMove(0, -5)}>Up</button>
            <button onClick={() => onMove(-10, 0)}>Left</button>
            <button onClick={() => onMove(0, 10)}>Down</button>
            <button onClick={() => onMove(10, 0)}>Right</button>
        </div>
    );
}