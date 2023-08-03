import Flag from './images/flag.png';
import Mansion from './images/mansion.png';
import { useState } from 'react';
import audioControls from './modules/audioControls';

function App() {
  const [total] = useState(30);
  const [positions, setPositions] = useState([
    {
      id: 1,
      top: 90,
      left: 30,
      scale: '1.5',
      rotate: '150deg',
      color: '#FF84AA',
      shape: 'round',
      type: 'shake-bottom',
      tip: false,
      show: true,
    },
    {
      id: 2,
      top: 50,
      left: 17,
      scale: '0.9',
      rotate: '160deg',
      color: '#FF84AA',
      shape: 'round',
      type: 'shake-bottom',
      tip: false,
      show: true,
    },
    {
      id: 3,
      top: 60,
      left: 68,
      scale: '18',
      rotate: '33deg',
      color: '#F31C12',
      shape: 'heart',
      type: 'enlarge',
      tip: false,
      show: true,
    },
    {
      id: 4,
      top: 33,
      left: 2,
      scale: '0.9',
      rotate: '20deg',
      color: 'brown',
      shape: 'bear',
      type: 'shake-bottom-right',
      tip: false,
      show: true,
    },
    {
      id: 9,
      top: 41,
      left: 34,
      scale: '0.9',
      rotate: '140deg',
      color: '#FCBB11',
      shape: 'round',
      type: 'shake-bottom-noTip',
      tip: false,
      show: true,
    },
    {
      id: 5,
      top: 48,
      left: 36,
      scale: '1.2',
      rotate: '110deg',
      color: '#F31C12',
      shape: 'round',
      type: 'shake-bottom-noTip',
      tip: false,
      show: true,
    },
    {
      id: 6,
      top: 78,
      left: 50,
      scale: '1',
      rotate: '135deg',
      color: '#FF84AA',
      shape: 'round',
      type: 'shake-bottom-more',
      tip: true,
      show: true,
    },
    {
      id: 7,
      top: 51,
      left: 40,
      scale: '1',
      rotate: '145deg',
      color: '#A7DD2D',
      shape: 'round',
      type: 'shake-bottom-noTip',
      tip: false,
      show: true,
    },
    {
      id: 8,
      top: 39,
      left: 39,
      scale: '0.8',
      rotate: '-30deg',
      color: '#FF84AA',
      shape: 'bear',
      type: 'shake-bear-tip',
      tip: true,
      show: true,
    },
    {
      id: 10,
      top: 82,
      left: 53,
      scale: '1.2',
      rotate: '160deg',
      color: '#FF84AA',
      shape: 'round',
      type: 'shake-bottom-tip',
      tip: true,
      show: true,
    },
  ]);

  const handlePop = (id) => {
    audioControls.play('pop');
    const tmp = positions.map((balloon) => {
      if (balloon.id === id) {
        return { ...balloon, show: !balloon.show };
      }
      return balloon;
    });
    setPositions(tmp);
  };

  const handleAdd = () => {
    const balloon = positions
      .reverse()
      .find((balloon) => balloon.show === false);
    console.log(balloon);
    if (balloon) {
      handlePop(balloon.id);
    } else {
      if (positions.length < total)
        setPositions([...positions, generateBallon()]);
    }
  };

  function generateBallon() {
    let top = 90;
    let left = 30;
    while (positions.some((balloon) => balloon.top === top)) {
      top = Math.floor(Math.random() * (100 - 10) + 10);
    }
    while (positions.some((balloon) => balloon.left === left)) {
      left = Math.floor(Math.random() * (100 - 10) + 10);
    }
    const randomInteger = Math.floor(Math.random() * 11);
    const scale = 0.3 + randomInteger * 0.1;
    const shapes = ['heart', 'round', 'bear'];
    const colors = ['#FF84AA', '#FCBB11', '#A7DD2D', '#F31C12'];
    return {
      id: positions.length + 1,
      top: top,
      left: left,
      scale: scale,
      rotate: '150deg',
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      type: left >= 50 ? 'shake-bottom-right' : 'shake-bottom-noTip',
      tip: false,
      show: true,
    };
  }

  return (
    <main>
      <img
        src={Mansion}
        alt="mansion"
        className="mansion"
        onClick={() => handleAdd()}
      />
      {positions.map((balloon) => (
        <>
          {balloon.shape === 'round' && balloon.show ? (
            <div
              key={balloon.id}
              className="balloonLeft"
              style={{
                '--initial-rotation': balloon.rotate,
                top: balloon.top.toString() + 'vh',
                left: balloon.left.toString() + 'vw',
                '--initial-scale': balloon.scale,
                animation: `${balloon.type} 2s ease-in-out infinite both`,
                WebkitAnimation: `${balloon.type} 2s ease-in-out infinite both`,
              }}
              onClick={() => handlePop(balloon.id)}
            >
              <div
                className="roundShape"
                style={{
                  background:
                    balloon.color === '#A7DD2D'
                      ? 'radial-gradient(#FBE519 15%, #A7DD2D, #A7DD2D)'
                      : balloon.color === '#FF84AA'
                      ? 'radial-gradient(#ffaebe 15%, #FF84AA, #FF84AA)'
                      : balloon.color === '#F31C12'
                      ? 'radial-gradient(#F67052 10%, #F31C12, #F31C12)'
                      : balloon.color === '#FCBB11'
                      ? 'radial-gradient(#FFF24A 10%, #FCBB11, #FCBB11)'
                      : null,
                  border: `5px solid ${balloon.color}`,
                }}
              >
                <div className="balloonTip" />
                {balloon.tip && <div className="balloonString" />}
              </div>
            </div>
          ) : balloon.shape === 'bear' && balloon.show ? (
            <div
              key={balloon.id}
              className="bear"
              style={{
                '--initial-rotation': balloon.rotate,
                top: balloon.top.toString() + 'vh',
                left: balloon.left.toString() + 'vw',
                '--initial-scale': balloon.scale,
                animation: `${balloon.type} 2s ease-in-out infinite both`,
                WebkitAnimation: `${balloon.type} 2s ease-in-out infinite both`,
              }}
              onClick={() => handlePop(balloon.id)}
            >
              <div className="bearEars">
                <div
                  className="ear"
                  style={{
                    transform: 'rotate(-40deg)',
                    boxShadow: '-3px 6px 4px -2px #FBCD83 inset',
                  }}
                >
                  <div className="earShadow" />
                </div>
                <div className="ear" style={{ transform: 'rotate(40deg)' }}>
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
                {balloon.tip && <div className="bearString" />}
              </div>
            </div>
          ) : balloon.shape === 'heart' && balloon.show ? (
            <div
              key={balloon.id}
              className="heartBalloon"
              style={{
                '--initial-scale': balloon.scale,
                top: balloon.top.toString() + 'vh',
                left: balloon.left.toString() + 'vw',
                '--initial-rotation': balloon.rotate,
              }}
              onClick={() => handlePop(balloon.id)}
            >
              <div
                className="heartBorder"
                style={{ transform: 'scale(1.02)' }}
              />
              <div className="heart">
                <div style={{ zIndex: 1 }} className="heartBalloonText">
                  <span>~70%</span>
                  <span>SALE</span>
                </div>
              </div>
            </div>
          ) : null}
        </>
      ))}
      <img src={Flag} alt="flag" className="flag" />
      <div
        className="cloud"
        style={{
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
          top: '34vh',
          left: '13vw',
          transform: 'scale(0.5) rotate(5deg)',
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
