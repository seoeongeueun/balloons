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
      scale: 1.5,
      rotate: 150,
      color: '#FF84AA',
      shape: 'round',
      type: 'shake-bottom-less',
      tip: false,
      show: true,
    },
    {
      id: 2,
      top: 50,
      left: 17,
      scale: 0.9,
      rotate: 160,
      color: '#FF84AA',
      shape: 'round',
      type: 'shake-bottom-less',
      tip: false,
      show: true,
    },
    {
      id: 3,
      top: 60,
      left: 68,
      scale: 18,
      rotate: 33,
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
      scale: 0.9,
      rotate: 20,
      color: 'brown',
      shape: 'bear',
      type: 'shake-bear-noTip',
      tip: false,
      show: true,
    },
    {
      id: 11,
      top: 20,
      left: 27,
      scale: 0.8,
      rotate: -30,
      color: '#3110C0',
      shape: 'bear',
      type: 'shake-bear-noTip',
      tip: false,
      show: true,
    },
    {
      id: 12,
      top: 28,
      left: 28,
      scale: 1.2,
      rotate: 165,
      color: '#A7DD2D',
      shape: 'round',
      type: 'shake-bottom-noTip',
      tip: false,
      show: true,
    },
    {
      id: 13,
      top: 28,
      left: 38,
      scale: 1.45,
      rotate: 135,
      color: '#FF84AA',
      shape: 'round',
      type: 'shake-bottom-noTip',
      tip: false,
      show: true,
    },
    {
      id: 13,
      top: 10,
      left: 34,
      scale: 0.9,
      rotate: -25,
      color: '#FF84AA',
      shape: 'bear',
      type: 'shake-bear-noTip',
      tip: false,
      show: true,
    },
    {
      id: 10,
      top: 39,
      left: 32,
      scale: 1.1,
      rotate: 190,
      color: '#3110C0',
      shape: 'round',
      type: 'shake-bottom-noTip',
      tip: false,
      show: true,
    },
    {
      id: 9,
      top: 41,
      left: 34,
      scale: 0.9,
      rotate: 140,
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
      scale: 1.2,
      rotate: 110,
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
      scale: 1,
      rotate: 135,
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
      scale: 1,
      rotate: 145,
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
      scale: 0.8,
      rotate: -30,
      color: '#FF84AA',
      shape: 'bear',
      type: 'shake-bear-tip',
      tip: true,
      show: true,
    },
    {
      id: 14,
      top: 20,
      left: 61,
      scale: 1.1,
      rotate: -30,
      color: '#FF84AA',
      shape: 'daisy',
      type: 'shake-daisy-tip',
      tip: true,
      show: true,
    },
    {
      id: 10,
      top: 82,
      left: 53,
      scale: 1.2,
      rotate: 160,
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
    const balloon = positions.find((balloon) => balloon.show === false);
    console.log(balloon);
    if (balloon) {
      handlePop(balloon.id);
    } else {
      if (positions.length < total) console.log(generateBallon());
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
    const scale = 0.5 + randomInteger * 0.1;

    //in the order of pink, yellow, green, red, blue
    const colors = ['#FF84AA', '#FCBB11', '#A7DD2D', '#F31C12', '#3110C0'];

    const shapes = ['bear', 'round', 'heart', 'daisy'];
    const chances = [0.1, 0.5, 0.3, 0.1];
    const randomValue = Math.random() * 1;
    let sum = 0;
    let index = 0;
    for (let i = 0; i < shapes.length; i++) {
      sum += chances[i];
      if (randomValue < sum) {
        index = i;
        break;
      }
    }

    return {
      id: positions.length + 1,
      top: top,
      left: left,
      scale: scale,
      rotate: 150,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[index],
      type: left >= 50 ? 'shake-bear-noTip' : 'shake-bottom-noTip',
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
      {positions.find((b) => b.id === 3).show && (
        <div
          className="heartContainer"
          style={{
            '--initial-scale': '2',
            top: '60vh',
            left: '68vw',
            '--initial-rotation': '33deg',
            animation: 'enlarge 2s ease-in-out infinite both',
            WebkitAnimation: 'enlarge 2s ease-in-out infinite both',
          }}
          onClick={() => handlePop(3)}
        >
          <div className="heartTop">
            <div
              className="heartCircle"
              style={{
                marginRight: '-13px',
                boxShadow: '7px 2px 1px -4px #FFFFFF inset',
              }}
            />
            <div className="heartCircle" />
          </div>
          <div className="heartBottom" />
          <div className="heartTip" />
          <div className="heartText">
            <span>~70%</span>
            <span>SALE</span>
          </div>
        </div>
      )}
      {positions.map((balloon) => (
        <>
          {balloon.shape === 'round' && balloon.show && balloon.id !== 3 ? (
            <div
              key={balloon.id}
              className="balloonLeft"
              style={{
                '--initial-rotation': balloon.rotate.toString() + 'deg',
                top: balloon.top.toString() + 'vh',
                left: balloon.left.toString() + 'vw',
                '--initial-scale': balloon.scale.toString(),
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
                      ? 'radial-gradient(#FBE519 10%, #A7DD2D, #A7DD2D)'
                      : balloon.color === '#FF84AA'
                      ? 'radial-gradient(#ffaebe 10%, #FF84AA, #FF84AA)'
                      : balloon.color === '#F31C12'
                      ? 'radial-gradient(#F67052 10%, #F31C12, #F31C12)'
                      : balloon.color === '#FCBB11'
                      ? 'radial-gradient(#FFF24A 10%, #FCBB11, #FCBB11)'
                      : balloon.color === '#3110C0' &&
                        'radial-gradient(#6B66BE 10%, #3110C0, #3110C0)',
                  border: `5px solid ${balloon.color}`,
                }}
              >
                <div
                  className="balloonTip"
                  style={{ backgroundColor: balloon.color }}
                />
                {balloon.tip && <div className="balloonString" />}
              </div>
            </div>
          ) : balloon.shape === 'bear' && balloon.show && balloon.id !== 3 ? (
            <div
              key={balloon.id}
              className="bear"
              style={{
                '--initial-rotation': balloon.rotate.toString() + 'deg',
                top: balloon.top.toString() + 'vh',
                left: balloon.left.toString() + 'vw',
                '--initial-scale': balloon.scale.toString(),
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
          ) : balloon.shape === 'heart' && balloon.show && balloon.id !== 3 ? (
            <div
              key={balloon.id}
              className="heartContainer"
              style={{
                '--initial-scale': balloon.scale.toString(),
                top: balloon.top.toString() + 'vh',
                left: balloon.left.toString() + 'vw',
                '--initial-rotation': balloon.rotate.toString() + 'deg',
                animation: `${balloon.type} 2s ease-in-out infinite both`,
                WebkitAnimation: `${balloon.type} 2s ease-in-out infinite both`,
              }}
              onClick={() => handlePop(balloon.id)}
            >
              <div className="heartTop">
                <div
                  className="heartCircle"
                  style={{
                    marginRight: '-13px',
                    boxShadow: '7px 2px 1px -4px #FFFFFF inset',
                    backgroundColor: balloon.color,
                    border: `4px solid ${balloon.color}`,
                  }}
                />
                <div
                  className="heartCircle"
                  style={{
                    backgroundColor: balloon.color,
                    border: `4px solid ${balloon.color}`,
                  }}
                />
              </div>
              <div
                className="heartBottom"
                style={{
                  background:
                    balloon.color === '#A7DD2D'
                      ? 'radial-gradient(at 38% 38%, #FBE519 3%, #A7DD2D, #A7DD2D)'
                      : balloon.color === '#FF84AA'
                      ? 'radial-gradient(at 38% 38%, #ffaebe 3%, #FF84AA, #FF84AA)'
                      : balloon.color === '#F31C12'
                      ? 'radial-gradient(at 38% 38%, #F97421 3%, #F31C12, #F31C12)'
                      : balloon.color === '#FCBB11'
                      ? 'radial-gradient(at 38% 38%, #FFF24A 3%, #FCBB11, #FCBB11)'
                      : balloon.color === '#3110C0' &&
                        'radial-gradient(at 38% 38%, #6B66BE 3%, #3110C0, #3110C0)',
                }}
              />
              <div
                className="heartTip"
                style={{ backgroundColor: balloon.color }}
              />
            </div>
          ) : (
            balloon.shape === 'daisy' &&
            balloon.show &&
            balloon.id !== 3 && (
              <div
                className="daisy"
                key={balloon.id}
                style={{
                  '--initial-rotation': balloon.rotate.toString() + 'deg',
                  top: balloon.top.toString() + 'vh',
                  left: balloon.left.toString() + 'vw',
                  '--initial-scale': balloon.scale.toString(),
                  animation: `${balloon.type} 2s ease-in-out infinite both`,
                  WebkitAnimation: `${balloon.type} 2s ease-in-out infinite both`,
                }}
                onClick={() => handlePop(balloon.id)}
              >
                <div className="daisyPetals">
                  <div
                    className="petalsHalf"
                    style={{
                      transform: 'scaleY(-1)',
                      marginBottom: '-2px',
                    }}
                  >
                    <div className="petal" />
                    <div className="petal" style={{ marginTop: '33px' }} />
                    <div className="petal" />
                  </div>
                  <div className="petalsHalf" style={{ marginLeft: '6px' }}>
                    <div className="petal" />
                    <div className="petal" style={{ marginTop: '33px' }} />
                    <div className="petal" />
                  </div>
                </div>
                <div className="daisyCenter">
                  <div className="daisyYellow">
                    <div className="daisyEyes">
                      <div className="daisyEye" />
                      <div className="daisyEye" />
                    </div>
                    <div className="daisySmile" />
                  </div>
                </div>
                <div className="daisyTip" />
                {balloon.tip && <div className="daisyString" />}
              </div>
            )
          )}
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
