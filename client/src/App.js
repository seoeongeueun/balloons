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
      <div
        className="cloud"
        style={{ top: "72vh", left: "-4vw", transform: "scale(0.9)" }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "38vh",
          left: "8vw",
          transform: "scale(0.4)",
          filter: "blur(5px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{ top: "90vh", left: "15vw", transform: "scale(0.9)" }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "74vh",
          left: "29vw",
          transform: "scale(0.3) rotate(5deg)",
          filter: "blur(10px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "64vh",
          left: "48vw",
          transform: "scale(0.4) rotate(-5deg)",
          filter: "blur(10px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "96vh",
          left: "70vw",
          transform: "scale(1.5) rotate(-23deg)",
          filter: "blur(2px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "40vh",
          left: "70vw",
          transform: "scale(0.5) rotate(-10deg)",
          filter: "blur(6px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "51vh",
          left: "83vw",
          transform: "scale(0.7) rotate(-8deg)",
          filter: "blur(6px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
    </main>
  );
}

export default App;
