import { CloudManager } from './cloud.js';
import { Firework } from './fireworks.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/////////////////////////// GLOBAL VARS //////////////////////////

let tower = [];
let question = {};
let level = 1;
let timeLeft = 60;
let interval;
let score = 0;
let verticalOffset = 0; // total stack height
let gameOver = true;


////////////////////////////// ART/EFFECTS ////////////////////

const cloudManager = new CloudManager(canvas.width, canvas.height);


const blockImageURLs = [
    'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/cropped_image_1.png',
    'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/cropped_image_2.png',
    'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/cropped_image_3.png',
    'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/cropped_image_4.png',
];

const blockImages = [];
blockImageURLs.forEach(url => {
    const img = new Image();
    img.src = url;
    blockImages.push(img);
});

const sounds = {
    correct: new Audio('https://freesound.org/data/previews/256/256113_3263906-lq.mp3'),
};

const stars = [];
const shootingStars = [];

const fireworks = [];

function triggerFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  fireworks.push(new Firework(x, y, canvas));
}

function generateStars(count = 50) {
    stars.length = 0;
    for (let i = 0; i < count; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: 0
    });
    }
}
let starsGenerated = false;

function spawnShootingStar() {
    shootingStars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * (canvas.height / 3),
    vx: -4 - Math.random() * 4,
    vy: 2 + Math.random() * 2,
    life: 60,  // frames
    opacity: 1  // start fully visible
    });
}

function lerpColor(a, b, t) {
    const ah = parseInt(a.slice(1), 16),
        ar = ah >> 16,
        ag = (ah >> 8) & 0xff,
        ab = ah & 0xff;

    const bh = parseInt(b.slice(1), 16),
        br = bh >> 16,
        bg = (bh >> 8) & 0xff,
        bb = bh & 0xff;

    const rr = Math.round(ar + t * (br - ar)),
        rg = Math.round(ag + t * (bg - ag)),
        rb = Math.round(ab + t * (bb - ab));

    return `rgb(${rr},${rg},${rb})`;
}

/////////////////////////////// QUESTIONS ///////////////////////

function generateQuestion() {
    const difficulty = document.getElementById('difficulty').value;
  let a, b, op, ops;

  if (difficulty === 'easy') {
    ops = ['+', '-'];
    op = ops[Math.floor(Math.random() * ops.length)];
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;

  } else if (difficulty === 'medium') {
    ops = ['+', '-', '*', '/'];
    op = ops[Math.floor(Math.random() * ops.length)];
    a = Math.floor(Math.random() * 12) + 1;
    b = Math.floor(Math.random() * 12) + 1;

  } else if (difficulty === 'hard') {
    ops = ['+', '-', '*', '/'];
    op = ops[Math.floor(Math.random() * ops.length)];

    if (op === '+' || op === '-') {
      a = Math.floor(Math.random() * (100)) + 1;
      b = Math.floor(Math.random() * (100)) + 1;
    } else {
      a = Math.floor(Math.random() * 20) + 1;
      b = Math.floor(Math.random() * 20) + 1;
    }
  }

  // Division: ensure integer result
  if (op === '/') {
    a = a * b;
  }
  // Subtraction: prevent negative result
  else if (op === '-' && a < b) {
    [a, b] = [b, a];
  }

  const expr = `${a} ${op} ${b}`;
  const answer = Math.floor(eval(expr));
  question = { text: expr, answer };

  document.getElementById('question').textContent = `What is ${expr}?`;
  document.getElementById('answer').value = '';
}

//////////////////////////// DRAW /////////////////////////////

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    verticalOffset = Math.max(0, (tower.length - 1) * 60); // total stack height

    // Sky color
    const maxBlocks = 30;  // max tower height before full darkness
    const t = Math.min(tower.length / maxBlocks, 1); // clamp from 0 to 1

    const topColor = lerpColor('#87ceeb', '#0d0030', t);  // light to dark
    const bottomColor = lerpColor('#b0e0e6', '#110026', t); // pale to deep blue

    const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    skyGradient.addColorStop(0, topColor);
    skyGradient.addColorStop(1, bottomColor);

    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Stars
    if (tower.length > 15 && !starsGenerated) {
        generateStars(50);
        starsGenerated = true;
    }

    let skyFadeFactor = 0;

    if (tower.length > 15) {
        skyFadeFactor = Math.min((tower.length - 15) / 15, 1); // 0 to 1 as height goes 15→30
    }

    stars.forEach(star => {
        star.alpha = skyFadeFactor;

        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
    });

    
    const fadeCountdown = 5;
    // Shooting Star
    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];

        s.x += s.vx;
        s.y += s.vy;
        s.life--;
        if (s.life <= fadeCountdown){
            s.opacity = s.life / fadeCountdown;  // fade out at the end
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx*4, s.y - s.vy*4);
        ctx.stroke();

        if (s.life <= 0) {
            shootingStars.splice(i, 1);
        }
    }

    // Cloud
    cloudManager.updateAndDraw(ctx, verticalOffset);

    // Ground
    ctx.fillStyle = '#90ee90';
    // Ground (shift upward as tower grows)
    ctx.fillRect(0, 200 + verticalOffset, canvas.width, canvas.height);

    // Fireworks
    fireworks.forEach(fw => {
        fw.update();
        fw.draw(ctx);
    });

    // Tower
    const blockOverlap = 60;
    for (let i = 0; i < tower.length; i++) {
    const block = tower[i];
    const x = canvas.width / 2 - 50;
    const y = 170 - i * blockOverlap + verticalOffset;

    // Animate scale if not fully visible yet
    if (block.scale < 1) {
        block.scale += 0.1; // You can tweak this for slower/smoother animation
        if (block.scale > 1) block.scale = 1;
    }

    const scale = block.scale || 1;

    ctx.save();

    // Move the origin to the center of the block
    ctx.translate(x + 50, y + 50);
    ctx.scale(scale, scale);
    ctx.translate(-50, -50); // Return to top-left for image drawing

    if (block.image.complete) {
        ctx.drawImage(block.image, 0, 0, 100, 100);
    } else {
        ctx.fillStyle = 'gray';
        ctx.fillRect(0, 0, 100, 100);
    }

    ctx.restore();
    }

    requestAnimationFrame(draw);
}

///////////////////////////// RUNNING ////////////////////////////

function addBlock() {
    const image = blockImages[Math.floor(Math.random() * blockImages.length)];
    tower.push({ image, scale: 0 });
}

document.getElementById('answer').addEventListener('input', function () {
    if (gameOver) return;

    const val = parseInt(this.value);
    if (val === question.answer) {
    sounds.correct.play();
    score++;
    if (score % 5 === 0) {
        level++;
        document.getElementById('level').textContent = level;
    }
    //document.getElementById('feedback').textContent = 'Correct!';
    addBlock();
    generateQuestion();
    } 
});

///////////////////////// GAME OVER //////////////////////////

function startTimer() {
  gameOver = false;
  interval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(interval);
      gameOver = true;

      // Hide the canvas and show the game over screen
      //canvas.style.display = 'none';
      const gameOverOverlay = document.getElementById('gameOverOverlay');
      gameOverOverlay.style.display = 'flex';

      // Update the game over screen with final stats
      document.getElementById('finalLevel').textContent = `Level: ${level}`;
      document.getElementById('finalTowerHeight').textContent = `Tower Height: ${tower.length}`;

      // Save high scores to localStorage
      const difficulty = document.getElementById('difficulty').value;
      const save = JSON.parse(localStorage.getItem('mathTowerScores') || '{}');
      const prev = save[difficulty] || { level: 0, blocks: 0 };

      const newBlocks = Math.max(tower.length, prev.blocks);
      const newLevel = Math.max(level, prev.level);

      save[difficulty] = { level: newLevel, blocks: newBlocks };
      localStorage.setItem('mathTowerScores', JSON.stringify(save));
    }
  }, 1000);
}

document.getElementById('restartButton').addEventListener('click', function() {
  // Hide the game over screen and show the canvas again
  const gameOverOverlay = document.getElementById('gameOverOverlay');
  gameOverOverlay.style.display = 'none';
  canvas.style.display = 'block';
  
  // Restart the game
  reset();
  startTimer();
});

/////////////////////// LOAD PROGRESS //////////////////////////

function loadProgress() {
  let scores = JSON.parse(localStorage.getItem('mathTowerScores') || '{}');

  // Legacy support: convert old format if present
  const old = localStorage.getItem('mathTowerScore');
  if (old) {
    const oldData = JSON.parse(old);
    scores['medium'] = {
      level: oldData.level || 1,
      blocks: oldData.blocks || 0
    };
    localStorage.setItem('mathTowerScores', JSON.stringify(scores));
    localStorage.removeItem('mathTowerScore');
  }

  const entries = Object.entries(scores);
  const parts = entries.map(([difficulty, data]) =>
    `<strong>${difficulty[0].toUpperCase() + difficulty.slice(1)}</strong>: Level ${data.level}, Height ${data.blocks}`
  );
  document.getElementById('welcomeScores').innerHTML = parts.join('<br>');
  document.getElementById('welcomeOverlay').style.display = 'flex';

  document.getElementById('welcomeCloseButton').onclick = () => {
    document.getElementById('welcomeOverlay').style.display = 'none';
  };
//}

  const savedDifficulty = localStorage.getItem("selectedDifficulty");
  const select = document.getElementById("difficulty");
  select.value = savedDifficulty || "medium"; // default to medium
}

/////////////////////// INITIALISE //////////////////////////

function reset() {
  tower = [];
  verticalOffset = 0;
  level = 1;
  timeLeft = 60;
  score = 0;
  question = {};

  document.getElementById('level').textContent = level;
  document.getElementById('timer').textContent = timeLeft;
  document.getElementById('feedback').textContent = '';
  document.getElementById('answer').value = '';

  
  generateQuestion();
  addBlock();
  for (let i = 0; i < 15; i++) {
    cloudManager.spawnCloud();
  }
    clearInterval(interval);
}

// load, setstage, start timer
loadProgress();
reset();
draw();

document.getElementById('welcomeCloseButton').addEventListener('click', startTimer);

////////////////////////////// RESET DIFFICULTY /////////////////

document.getElementById('difficulty').addEventListener('change', (e) => {
    const selectedDifficulty = e.target.value;
    localStorage.setItem("selectedDifficulty", selectedDifficulty);
  reset();
  startTimer();
});

setInterval(() => {
    if (tower.length < 3 && Math.random() < 0.1) cloudManager.spawnCloud();
    if (tower.length > 15 && tower.length < 40 && Math.random() < 0.2) triggerFirework();
    if (tower.length > 20 && Math.random() < 0.1) spawnShootingStar();
}, 1000);  // every second
