
import vimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', onPlay);

player.getCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function () {
    
});
