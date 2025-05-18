// cloud.js

export class CloudManager {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.clouds = [];
    this.cloudImages = [];

    const cloudImageURLs = [
      'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104823.png',
      'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104827.png',
      'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104829.png',
      'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104831.png',
      'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104833.png',
      'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104835.png',
    ];

    for (const url of cloudImageURLs) {
      const img = new Image();
      img.src = url;
      this.cloudImages.push(img);
    }
  }

  spawnCloud() {
    const img = this.cloudImages[Math.floor(Math.random() * this.cloudImages.length)];
    const size = 100 + Math.random() * 100;

    this.clouds.push({
      x: Math.random() * this.canvasWidth,
      y: -Math.random() * (this.canvasHeight / 2),
      speed: 0.01 + Math.random() * 0.2,
      size,
      img
    });
  }

  updateAndDraw(ctx, verticalOffset) {
    for (let i = this.clouds.length - 1; i >= 0; i--) {
      const c = this.clouds[i];
      c.x -= c.speed;

      ctx.drawImage(c.img, c.x, c.y + verticalOffset, c.size, c.size);

      if (c.x + c.size < 0) {
        this.clouds.splice(i, 1);
      }
    }
  }
}