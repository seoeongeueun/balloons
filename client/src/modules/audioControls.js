import Pop from '../audio/pop-39222.mp3';

const audios = {
  pop: new Audio(Pop),
};

let current = null;

const play = (name) => {
  if (current) audios[current].pause();
  audios[name].volume = 0.5;
  audios[name].play();
  current = name;
};

const pause = (name) => {
  current = null;
  audios[name].pause();
};

const audioControls = {
  pause,
  play,
};

export default audioControls;
