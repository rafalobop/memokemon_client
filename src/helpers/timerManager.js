const startTimer = async () => {
    const deadline = new Date().getTime() + 60000;
    const counter = await setInterval(() => {
      let now = new Date().getTime();
      let rest = deadline - now;
      let timer = Math.floor((rest % (1000 * 60)) / 1000);

      if (timer == 0) {
        clearInterval(counter);
      }
      return timer;
    }, 1000);
}

module.exports = { startTimer }