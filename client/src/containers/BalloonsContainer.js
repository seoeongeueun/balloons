import { useSelector, useDispatch } from 'react-redux';
import { popBalloon } from '../modules/positions';
import Balloon from '../components/Balloon.js';
import Heart from '../components/Heart.js';
import Bear from '../components/Bear.js';

function BalloonsContainer() {
  const positions = useSelector((state) => state.positions);
  const dispatch = useDispatch();
  const onPop = (id) => dispatch(popBalloon(id));

  return (
    <div className="balloonsContainer">
      {positions.map((balloon) => {
        {
          balloon.show && balloon.shape === 'round' ? (
            <Balloon
              id={balloon.id}
              color={balloon.color}
              top={balloon.top}
              left={balloon.left}
              scale={balloon.scale}
              rotate={balloon.rotate}
              type={balloon.type}
              tip={balloon.tip}
              onPop={onPop}
            />
          ) : balloon.show && balloon.shape === 'bear' ? (
            <Bear
              id={balloon.id}
              top={balloon.top}
              left={balloon.left}
              scale={balloon.scale}
              rotate={balloon.rotate}
              type={balloon.type}
              tip={balloon.tip}
              onPop={onPop}
            />
          ) : (
            balloon.show &&
            balloon.shape === 'heart' && (
              <Heart
                id={balloon.id}
                color={balloon.color}
                top={balloon.top}
                left={balloon.left}
                scale={balloon.scale}
                rotate={balloon.rotate}
                type={balloon.type}
                tip={balloon.tip}
                onPop={onPop}
              />
            )
          );
        }
      })}
    </div>
  );
}

export default BalloonsContainer;
