import Flag from './images/flag.png';
import Mansion from './components/Mansion';
import BalloonsContainer from './containers/BalloonsContainer';
import CenterBalloonsContainer from './containers/CenterBalloonsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFlyMode } from './modules/modes.js';
import { toggleNightMode } from './modules/time';

function App() {
  const dispatch = useDispatch();
  const onFly = () => dispatch(toggleFlyMode());
  const onNight = () => dispatch(toggleNightMode());
  const mode = useSelector((state) => state.modes);
  const time = useSelector((state) => state.time);

  const handleNightTime = () => {
    onNight();
    const mainDiv = document.getElementById('main');
    mainDiv.classList.toggle('dark');
  };

  return (
    <div
      className="main"
      id="main"
      style={{
        backgroundImage:
          time === 'night'
            ? 'linear-gradient(#193076, #5287f1)'
            : 'linear-gradient(#53f1ff, #00BBF7)',
      }}
    >
      <div className="buttons">
        <button onClick={() => onFly()}>
          {mode === 'default' ? '날리기' : '돌아와!'}
        </button>
        <button
          onClick={() => handleNightTime()}
          style={{
            backgroundColor: time === 'day' ? '#122254' : '#FFBB11',
            color: 'white',
            borderColor: time === 'day' ? '#122254' : '#FFBB11',
          }}
        >
          {time === 'day' ? '밤' : '낮'}
        </button>
      </div>
      <BalloonsContainer />
      <CenterBalloonsContainer />
      <Mansion />
      <img src={Flag} alt="flag" className="flag" />

      {time === 'day' ? (
        <>
          <div className="paperPlane">
            <div className="triangle1">
              <div className="triangle2">
                <div className="triangle"></div>
              </div>
            </div>
          </div>

          <div className="rainbowContainer">
            <div className="redRing" />
            <div className="orangeRing" />
            <div className="yellowRing" />
            <div className="greenRing" />
            <div className="blueRing" />
            <div className="emptyRing" />
            <div className="clouds">
              <div
                className="cloud"
                style={{
                  transform: 'scale(0.3)',
                  width: '50px',
                }}
              >
                <div
                  className="cloudHalf"
                  style={{ marginBottom: '-6rem', marginLeft: '-1rem' }}
                >
                  <div
                    className="cloudShape2"
                    style={{ marginRight: '-15px' }}
                  />
                  <div className="cloudShape3" />
                  <div
                    className="cloudShape3"
                    style={{ marginBottom: '-10px' }}
                  />
                </div>
                <div className="cloudHalf">
                  <div className="cloudShape4" />
                  <div className="cloudShape1" />
                  <div className="cloudShape1" />
                  <div
                    className="cloudShape1"
                    style={{ marginBottom: '10px' }}
                  />
                </div>
              </div>
              <div
                className="cloud"
                style={{
                  transform: 'scale(0.3) scaleX(-1)',
                  width: '50px',
                }}
              >
                <div
                  className="cloudHalf"
                  style={{ marginBottom: '-6rem', marginLeft: '-1rem' }}
                >
                  <div
                    className="cloudShape2"
                    style={{ marginRight: '-15px' }}
                  />
                  <div className="cloudShape3" />
                  <div
                    className="cloudShape3"
                    style={{ marginBottom: '-10px' }}
                  />
                </div>
                <div className="cloudHalf">
                  <div className="cloudShape4" />
                  <div className="cloudShape1" />
                  <div className="cloudShape1" />
                  <div
                    className="cloudShape1"
                    style={{ marginBottom: '10px' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="cloud"
            style={{
              position: 'absolute',
              top: '70vh',
              left: '0vw',
              transform: 'scale(0.8) rotate(5deg)',
            }}
          >
            <div
              className="cloudHalf"
              style={{ marginBottom: '-6rem', marginLeft: '-1rem' }}
            >
              <div className="cloudShape2" style={{ marginRight: '-15px' }} />
              <div className="cloudShape3" />
              <div className="cloudShape3" style={{ marginBottom: '-10px' }} />
            </div>
            <div className="cloudHalf">
              <div className="cloudShape4" />
              <div className="cloudShape1" />
              <div className="cloudShape1" />
              <div className="cloudShape1" style={{ marginBottom: '10px' }} />
            </div>
          </div>
          <div
            className="cloud"
            style={{
              position: 'absolute',
              top: '34vh',
              left: '11vw',
              transform: 'scale(0.4) rotate(5deg)',
              filter: 'blur(5px)',
            }}
          >
            <div
              className="cloudHalf"
              style={{ marginBottom: '-6rem', marginLeft: '-1rem' }}
            >
              <div className="cloudShape2" style={{ marginRight: '-15px' }} />
              <div className="cloudShape3" />
              <div className="cloudShape3" style={{ marginBottom: '-10px' }} />
            </div>
            <div className="cloudHalf">
              <div className="cloudShape4" />
              <div className="cloudShape1" />
              <div className="cloudShape1" />
              <div className="cloudShape1" style={{ marginBottom: '10px' }} />
            </div>
          </div>
          <div
            className="cloud"
            style={{
              position: 'absolute',
              top: '88vh',
              left: '15vw',
              transform: 'scale(0.8) rotate(5deg)',
            }}
          >
            <div
              className="cloudHalf"
              style={{ marginBottom: '-6rem', marginLeft: '-1rem' }}
            >
              <div className="cloudShape2" style={{ marginRight: '-15px' }} />
              <div className="cloudShape3" />
              <div className="cloudShape3" style={{ marginBottom: '-10px' }} />
            </div>
            <div className="cloudHalf">
              <div className="cloudShape4" />
              <div className="cloudShape1" />
              <div className="cloudShape1" />
              <div className="cloudShape1" style={{ marginBottom: '10px' }} />
            </div>
          </div>
          <div
            className="cloud"
            style={{
              position: 'absolute',
              top: '70vh',
              left: '29vw',
              transform: 'scale(0.25) rotate(10deg)',
              filter: 'blur(10px)',
            }}
          >
            <div
              className="cloudHalf"
              style={{ marginBottom: '-6rem', marginLeft: '-1rem' }}
            >
              <div className="cloudShape2" style={{ marginRight: '-15px' }} />
              <div className="cloudShape3" />
              <div className="cloudShape3" style={{ marginBottom: '-10px' }} />
            </div>
            <div className="cloudHalf">
              <div className="cloudShape4" />
              <div className="cloudShape1" />
              <div className="cloudShape1" />
              <div className="cloudShape1" style={{ marginBottom: '10px' }} />
            </div>
          </div>
          <div
            className="cloud"
            style={{
              position: 'absolute',
              top: '60vh',
              left: '47vw',
              transform: 'scale(0.35) rotate(-10deg)',
              filter: 'blur(8px)',
            }}
          >
            <div
              className="cloudHalf"
              style={{ marginBottom: '-6rem', marginLeft: '-1rem' }}
            >
              <div className="cloudShape2" style={{ marginRight: '-15px' }} />
              <div className="cloudShape3" />
              <div className="cloudShape3" style={{ marginBottom: '-10px' }} />
            </div>
            <div className="cloudHalf">
              <div className="cloudShape4" />
              <div className="cloudShape1" />
              <div className="cloudShape1" />
              <div className="cloudShape1" style={{ marginBottom: '10px' }} />
            </div>
          </div>
          <div
            className="cloud"
            style={{
              position: 'absolute',
              top: '93vh',
              left: '70vw',
              transform: 'scale(1.5) rotate(-23deg)',
              filter: 'blur(2px)',
            }}
          >
            <div
              className="cloudHalf"
              style={{ marginBottom: '-6rem', marginLeft: '-1rem' }}
            >
              <div className="cloudShape2" style={{ marginRight: '-15px' }} />
              <div className="cloudShape3" />
              <div className="cloudShape3" style={{ marginBottom: '-10px' }} />
            </div>
            <div className="cloudHalf">
              <div className="cloudShape4" />
              <div className="cloudShape1" />
              <div className="cloudShape1" />
              <div className="cloudShape1" style={{ marginBottom: '10px' }} />
            </div>
          </div>
          <div
            className="cloud"
            style={{
              position: 'absolute',
              top: '40vh',
              left: '67vw',
              transform: 'scale(0.5) rotate(-10deg)',
              filter: 'blur(4px)',
            }}
          >
            <div
              className="cloudHalf"
              style={{ marginBottom: '-6rem', marginLeft: '-1rem' }}
            >
              <div className="cloudShape2" style={{ marginRight: '-15px' }} />
              <div className="cloudShape3" />
              <div className="cloudShape3" style={{ marginBottom: '-10px' }} />
            </div>
            <div className="cloudHalf">
              <div className="cloudShape4" />
              <div className="cloudShape1" />
              <div className="cloudShape1" />
              <div className="cloudShape1" style={{ marginBottom: '10px' }} />
            </div>
          </div>
          <div
            className="cloud"
            style={{
              position: 'absolute',
              top: '50vh',
              left: '80vw',
              transform: 'scale(0.7) rotate(-8deg)',
              filter: 'blur(3px)',
            }}
          >
            <div
              className="cloudHalf"
              style={{ marginBottom: '-6rem', marginLeft: '-1rem' }}
            >
              <div className="cloudShape2" style={{ marginRight: '-15px' }} />
              <div className="cloudShape3" />
              <div className="cloudShape3" style={{ marginBottom: '-10px' }} />
            </div>
            <div className="cloudHalf">
              <div className="cloudShape4" />
              <div className="cloudShape1" />
              <div className="cloudShape1" />
              <div className="cloudShape1" style={{ marginBottom: '10px' }} />
            </div>
          </div>
        </>
      ) : (
        <div className="nightSky">
          {Array.from({ length: 40 }, (_, index) => (
            <div
              key={index}
              className="star"
              style={{
                '--initial-scale': 0.2 + Math.floor(Math.random() * 11) * 0.1,
                top: Math.random() * (98 - 0) + 2 + 'vh',
                left: Math.random() * (98 - 0) + 2 + 'vw',
                '--initial-rotation': Math.random() * (360 - 0) + 10 + 'deg',
                '--move-up': '0',
                animation: 'enlarge 2s ease-in-out infinite both',
                WebkitAnimation: 'enlarge 2s ease-in-out infinite both',
              }}
            />
          ))}
          <div className="ufoContainer">
            <div className="ufoLight" />
            <div className="ufoBottom" />
            <div className="ufoTop" />
            <div className="ufoCircles">
              <div className="ufoCircle" style={{ marginTop: '2px' }} />
              <div className="ufoCircle" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
