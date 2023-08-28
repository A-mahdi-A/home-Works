function countdown(zaman) {
    var timer = zaman;
  
    const negahdashtan = setInterval(() => {
      console.log(timer);
      if(timer === 0) {
        clearInterval(negahdashtan);
      } else {
        timer--;
      }
    }, 1000);
  }
  
  countdown(10); 