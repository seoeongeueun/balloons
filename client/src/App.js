import Flag from "./images/flag.png";
import Mansion from "./images/mansion.png";

function App() {
  return (
    <main>
      <img src={Mansion} alt="mansion" className="mansion" />
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
          "--initial-scale": "18",
          top: "60vh",
          left: "68vw",
          "--initial-rotation": "33deg",
        }}
      >
        <div className="heartBorder" style={{ transform: "scale(1.03)" }} />
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
        style={{
          top: "70vh",
          left: "0vw",
          transform: "scale(0.8) rotate(5deg)",
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
          top: "34vh",
          left: "10vw",
          transform: "scale(0.4) rotate(5deg)",
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
        style={{
          top: "88vh",
          left: "15vw",
          transform: "scale(0.8) rotate(5deg)",
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
          top: "70vh",
          left: "29vw",
          transform: "scale(0.25) rotate(10deg)",
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
          top: "60vh",
          left: "47vw",
          transform: "scale(0.35) rotate(-10deg)",
          filter: "blur(8px)",
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
          top: "93vh",
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
          left: "67vw",
          transform: "scale(0.5) rotate(-10deg)",
          filter: "blur(4px)",
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
          top: "50vh",
          left: "80vw",
          transform: "scale(0.7) rotate(-8deg)",
          filter: "blur(3px)",
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
        className="bear"
        style={{
          "--initial-rotation": "20deg",
          top: "30vh",
          left: "2vw",
          "--initial-scale": "0.9",
        }}
      >
        <div className="bearEars">
          <div
            className="ear"
            style={{
              transform: "rotate(-40deg)",
              boxShadow: "-3px 6px 4px -2px #FBCD83 inset",
            }}
          >
            <div className="earShadow" />
          </div>
          <div className="ear" style={{ transform: "rotate(40deg)" }}>
            <div className="earShadow" />
          </div>
        </div>
        <div className="bearFace">
          <div className="bearEyes">
            <div className="eye" />
            <div className="eye" />
          </div>
          <div className="noseAndMouth">
            <div className="nose" />
            <div className="mouthLine" />
            <div className="smile">
              <div className="smileHalf" />
              <div className="smileHalf" />
            </div>
            <div className="mouthOpen" />
          </div>
          <div className="bearTip" />
        </div>
      </div>
    </main>
  );
}

export default App;
