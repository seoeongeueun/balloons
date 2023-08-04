import { useSelector, useDispatch } from 'react-redux';
import { addBalloon, popBalloon } from '../modules/positions';
import MansionImg from '../images/mansion.png';

function Mansion() {
  const positions = useSelector((state) => state.positions);
  const dispatch = useDispatch();
  const onPop = (id) => dispatch(popBalloon(id));
  const onAdd = () => {
    const balloon = positions.find((balloon) => balloon.show === false);
    if (balloon) {
      onPop(balloon.id);
    } else {
      if (positions.length < 40) {
        dispatch(addBalloon(generateBallon()));
      }
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
    <div className="mansionContainer">
      <img
        src={MansionImg}
        alt="mansion"
        className="mansion"
        onClick={() => onAdd()}
      />
    </div>
  );
}

export default Mansion;
