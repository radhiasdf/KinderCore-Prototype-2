export function createSoundPool(url, poolSize = 5) {
    const pool = Array.from({ length: poolSize }, () => {
      const audio = new Audio(url);
      audio.preload = 'auto';
      return audio;
    });
  
    let index = 0;
  
    return function playFromPool() {
      const sound = pool[index];
      sound.currentTime = 0;
      sound.play();
      index = (index + 1) % pool.length;
    };
  }