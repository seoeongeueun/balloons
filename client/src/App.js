import Flag from "./images/flag.png";

function App() {
  return (
    <main>
      <div
        className="balloon"
        style={{
          "--initial-rotation": "150deg",
          top: "90vh",
          left: "30vw",
          "--initial-scale": "1.5",
        }}
      >
        <div className="roundShape">
          <div className="balloonTip" />
        </div>
      </div>

      <div
        className="heartBalloon"
        style={{
          "--initial-scale": "15",
          top: "65vh",
          left: "65vw",
          "--initial-rotation": "33deg",
        }}
      >
        <div className="heartBorder" style={{ transform: "scale(1.05)" }} />
        <div className="heart">
          <div style={{ zIndex: 1 }} className="heartBalloonText">
            <span>~70%</span>
            <span>SALE</span>
          </div>
        </div>
      </div>
      <img src={Flag} alt="flag" className="flag" />
    </main>
  );
}

export default App;
