import Flag from './images/flag.png';
import Mansion from './components/Mansion';
import BalloonsContainer from './containers/BalloonsContainer';
import CenterBalloonsContainer from './containers/CenterBalloonsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFlyMode } from './modules/modes.js';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const onFly = () => dispatch(toggleFlyMode());
  const mode = useSelector((state) => state.modes);

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  return (
    <main>
      <div className="buttons">
        <button onClick={() => onFly()}>
          {mode === 'default' ? '날리기' : '돌아와!'}
        </button>
      </div>
      <BalloonsContainer />
      <CenterBalloonsContainer />
      <Mansion />
      <img src={Flag} alt="flag" className="flag" />
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
              transform: 'scale(0.3) scaleX(-1)',
              width: '50px',
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
    </main>
  );
}

export default App;
