export const POP_BALLOON = 'positions/POP_BALLOON';
export const ADD_BALLOON = 'positions/ADD_BALLOON';

export const popBalloon = (id) => ({
  type: POP_BALLOON,
  id,
});

export const addBalloon = (balloon) => ({
  type: ADD_BALLOON,
  balloon,
});

const initialState = [
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
    scale: 3,
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
];

export default function positions(state = initialState, action) {
  switch (action.type) {
    case POP_BALLOON:
      return state.map((balloon) =>
        balloon.id === action.id ? { ...balloon, show: !balloon.show } : balloon
      );
    case ADD_BALLOON:
      return state.push(action.balloon);
    default:
      return state;
  }
}
