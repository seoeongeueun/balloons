import { useSelector, useDispatch } from 'react-redux';
import { popBalloon } from '../modules/positions';
import Balloon from '../components/Balloon.js';
import Heart from '../components/Heart.js';
import Bear from '../components/Bear.js';
import Daisy from '../components/Daisy.js';

function BalloonsContainer() {
  const positions = useSelector((state) => state.positions);
  const dispatch = useDispatch();
  const onPop = (id) => dispatch(popBalloon(id));
  const mode = useSelector((state) => state.modes);

  return (
    <div className="balloonsContainer">
      {positions
        .filter((b) => b.tip === false)
        .map((balloon, index) =>
          balloon.show && balloon.shape === 'round' ? (
            <Balloon
              key={index}
              id={balloon.id}
              color={balloon.color}
              top={balloon.top}
              left={balloon.left}
              scale={balloon.scale}
              rotate={balloon.rotate}
              type={balloon.type}
              mode={mode}
              onPop={onPop}
            />
          ) : balloon.show && balloon.shape === 'bear' ? (
            <Bear
              key={index}
              id={balloon.id}
              top={balloon.top}
              left={balloon.left}
              scale={balloon.scale}
              rotate={balloon.rotate}
              type={balloon.type}
              mode={mode}
              onPop={onPop}
            />
          ) : balloon.show && balloon.shape === 'daisy' ? (
            <Daisy
              key={index}
              id={balloon.id}
              top={balloon.top}
              left={balloon.left}
              scale={balloon.scale}
              rotate={balloon.rotate}
              type={balloon.type}
              mode={mode}
              onPop={onPop}
            />
          ) : (
            balloon.show &&
            balloon.shape === 'heart' && (
              <Heart
                key={index}
                id={balloon.id}
                color={balloon.color}
                top={balloon.top}
                left={balloon.left}
                scale={balloon.scale}
                rotate={balloon.rotate}
                type={balloon.type}
                mode={mode}
                onPop={onPop}
              />
            )
          )
        )}
    </div>
  );
}

export default BalloonsContainer;
