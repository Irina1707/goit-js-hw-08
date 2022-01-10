import Player from '@vimeo/player';

var throttle = require('lodash.throttle');
console.log(Player);
const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

console.log(player);

const onPlay = function (data) {
    const value = data.currentTime;
    if(localStorage.currentTime) {
        value = localStorage.currentTime;
   }
    
   console.log(value);
    const time = localStorage.setItem("videoplayer-current-time", value);
    
    // data is an object containing properties specific to that event
};


   const throttleOnPlay = throttle(onPlay, 1000);

player.on('timeupdate', throttleOnPlay);

player.setCurrentTime().then(function (seconds) {
   
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});