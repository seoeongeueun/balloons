export const TOGGLE_FLY = 'positions/TOGGLE_FLY';

export const toggleFlyMode = () => ({
  type: TOGGLE_FLY,
});

const initialState = 'default';

export default function modes(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FLY:
      return state === 'fly' ? 'default' : 'fly';
    default:
      return state;
  }
}
