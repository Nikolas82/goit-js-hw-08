import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

// console.log(player)

function onPlay(time) {
  localStorage.setItem(STORAGE_KEY, time.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

// console.log(localStorage.getItem(STORAGE_KEY))
if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}
