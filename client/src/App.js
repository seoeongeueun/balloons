import Flag from './images/flag.png';
import Mansion from './images/mansion.png';
import { useEffect, useState } from 'react';
import audioControls from './modules/audioControls';
import BalloonsContainer from './containers/BalloonsContainer';

function App() {
  const [total] = useState(30);
  const [change, setChange] = useState(false);
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
      id: 25,
      top: 25,
      left: 48,
      scale: 1.4,
      rotate: 180,
      color: '#A7DD2D',
      shape: 'round',
      type: 'shake-bottom-noTip',
      tip: false,
      show: true,
    },
    {
      id: 25,
      top: 13,
      left: 51,
      scale: 1.4,
      rotate: 10,
      color: '#FCBB11',
      shape: 'heart',
      type: 'shake-heart-noTip-right',
      tip: false,
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
      id: 18,
      top: 52,
      left: 47,
      scale: 0.8,
      rotate: 210,
      color: '#FF84AA',
      shape: 'round',
      type: 'shake-bottom-tip-right',
      tip: false,
      show: true,
    },
    {
      id: 17,
      top: 48,
      left: 45,
      scale: 0.6,
      rotate: 220,
      color: '#3110C0',
      shape: 'round',
      type: 'shake-bottom-tip-right',
      tip: false,
      show: true,
    },
    {
      id: 16,
      top: 55,
      left: 47,
      scale: 0.75,
      rotate: 180,
      color: '#A7DD2D',
      shape: 'round',
      type: 'shake-bottom-tip-right',
      tip: true,
      show: true,
    },
    {
      id: 10,
      top: 85,
      left: 54,
      scale: 1.2,
      rotate: 160,
      color: '#FF84AA',
      shape: 'round',
      type: 'shake-bottom-tip',
      tip: true,
      show: true,
    },

    {
      id: 24,
      top: 35,
      left: 55,
      scale: 0.9,
      rotate: 190,
      color: '#F31C12',
      shape: 'round',
      type: 'shake-bottom-noTip-right-more',
      tip: false,
      show: true,
    },
    {
      id: 26,
      top: 23,
      left: 58,
      scale: 0.8,
      rotate: 50,
      color: '#FF84AA',
      shape: 'bear',
      type: 'shake-bear-noTip-right',
      tip: false,
      show: true,
    },
    {
      id: 25,
      top: 13,
      left: 58,
      scale: 0.9,
      rotate: 35,
      color: '#F31C12',
      shape: 'heart',
      type: 'shake-heart-noTip-right',
      tip: false,
      show: true,
    },
    {
      id: 20,
      top: 40,
      left: 52,
      scale: 0.8,
      rotate: 200,
      color: '#A7DD2D',
      shape: 'round',
      type: 'shake-bottom-tip-right2',
      tip: true,
      show: true,
    },
    {
      id: 23,
      top: 90,
      left: 56,
      scale: 1,
      rotate: 232,
      color: '#FF84AA',
      shape: 'round',
      type: 'shake-bottom-tip-right-more',
      tip: true,
      show: true,
    },
    {
      id: 22,
      top: 48,
      left: 56,
      scale: 0.9,
      rotate: 220,
      color: '#FCBB11',
      shape: 'round',
      type: 'shake-bottom-tip-right2',
      tip: true,
      show: true,
    },
    {
      id: 21,
      top: 83,
      left: 56,
      scale: 0.85,
      rotate: 218,
      color: '#3110C0',
      shape: 'round',
      type: 'shake-bottom-tip-right-more',
      tip: true,
      show: true,
    },
    {
      id: 19,
      top: 82,
      left: 55,
      scale: 1.2,
      rotate: 205,
      color: '#FF84AA',
      shape: 'round',
      type: 'shake-bottom-tip-right-more',
      tip: true,
      show: true,
    },
    {
      id: 15,
      top: 32,
      left: 52,
      scale: 1.1,
      rotate: 20,
      color: '#F31C12',
      shape: 'heart',
      type: 'shake-heart-tip-right',
      tip: true,
      show: true,
    },
  ]);
  useEffect(() => {
    setChange(!change);
  }, [positions]);

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
      <BalloonsContainer />
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
