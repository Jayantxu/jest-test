// timerGame.js
'use strict';

export default {
    timerGame(cb) {
        setTimeout(() => {
            cb();
        }, 1000);
    },
    infiniteTimerGame(cb) {
        setTimeout(() => {
            cb();
        }, 1000);
    }
}
