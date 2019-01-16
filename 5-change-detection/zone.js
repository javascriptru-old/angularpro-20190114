const oldSetTimeout = setTimeout;
setTimeout = (callback, time) => {
   console.log('START');
   oldSetTimeout(() => {
     callback();
     console.log('FINISH');
   }, time);
}

///-------------


setTimeout(_ => {
   console.log('DONE');
}, 3000);