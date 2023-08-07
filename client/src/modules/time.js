export const TOGGLE_NIGHT = 'time/TOGGLE_NIGHT';

export const toggleNightMode = () => ({
  type: TOGGLE_NIGHT,
});

const initialState = 'day';

export default function modes(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NIGHT:
      return state === 'night' ? 'day' : 'night';
    default:
      return state;
  }
}
