import { useSelector, useDispatch } from 'react-redux';
import { popBalloon } from '../modules/positions';
import BalloonString from '../components/BalloonString.js';
import HeartString from '../components/HeartString.js';
import BearString from '../components/BearString.js';
import DaisyString from '../components/DaisyString.js';
import { useEffect, useState } from 'react';

function CenterBalloonsContainer() {
  const positions = useSelector((state) => state.positions);
  const dispatch = useDispatch();
  const onPop = (id) => dispatch(popBalloon(id));
  const [centerPositions, setCenterPositions] = useState([]);

  useEffect(() => {
    if (positions?.length > 0) {
      setCenterPositions(positions.filter((b) => b.tip === true));
    }
  }, [positions]);

  return (
    <div className="centerBalloonsContainer">
      {centerPositions?.length > 0 &&
        centerPositions.map((balloon, index) =>
          balloon.shape === 'round' ? (
            <BalloonString
              key={index}
              id={balloon.id}
              color={balloon.color}
              bottom={balloon.bottom}
              right={balloon.right}
              scale={balloon.scale}
              rotate={balloon.rotate}
              show={balloon.show}
              type={balloon.type}
              onPop={onPop}
            />
          ) : balloon.shape === 'bear' ? (
            <BearString
              key={index}
              id={balloon.id}
              bottom={balloon.bottom}
              right={balloon.right}
              scale={balloon.scale}
              rotate={balloon.rotate}
              type={balloon.type}
              show={balloon.show}
              onPop={onPop}
            />
          ) : balloon.shape === 'daisy' ? (
            <DaisyString
              key={index}
              id={balloon.id}
              bottom={balloon.bottom}
              right={balloon.right}
              scale={balloon.scale}
              rotate={balloon.rotate}
              type={balloon.type}
              show={balloon.show}
              onPop={onPop}
            />
          ) : (
            balloon.shape === 'heart' && (
              <HeartString
                key={index}
                id={balloon.id}
                color={balloon.color}
                bottom={balloon.bottom}
                right={balloon.right}
                scale={balloon.scale}
                rotate={balloon.rotate}
                type={balloon.type}
                show={balloon.show}
                onPop={onPop}
              />
            )
          )
        )}
    </div>
  );
}

export default CenterBalloonsContainer;
