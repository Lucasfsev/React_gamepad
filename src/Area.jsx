export default function Area({starting}) {
    return (
        <div id="area">
            <div id="player" style={{
                position: 'absolute',
                left: `${starting.left}%`,
                top: `${starting.top}%`
            }}>
                🐐
            </div>
        </div>
    );
}