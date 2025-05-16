const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let tower = [];
let question = {};
let level = 1;
let timeLeft = 60;
let interval;
let score = 0;

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

const cloudImageURLs = [
  'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104823.png',
  'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104827.png',
  'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104829.png',
  'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104831.png',
  'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104833.png',
  'https://raw.githubusercontent.com/radhiasdf/Math-Tower-Game/refs/heads/main/Untitled75_20250516104835.png',
];

const cloudImages = [];
cloudImageURLs.forEach(url => {
    const img = new Image();
    img.src = url;
    cloudImages.push(img);
});

const sounds = {
    correct: new Audio('https://freesound.org/data/previews/256/256113_3263906-lq.mp3'),
};

const stars = [];
const shootingStars = [];
const clouds = [];

function spawnCloud() {
  const img = cloudImages[Math.floor(Math.random() * cloudImages.length)];
  const size = 100 + Math.random() * 100;
  clouds.push({
    x: Math.random() * canvas.width,
    y: -Math.random() * (canvas.height / 2),
    speed: 0.01 + Math.random() * 0.2,
    size,
    img
  });
}

function generateStars(count = 50) {
    stars.length = 0;
    for (let i = 0; i < count; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5
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

function randomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 50%)`;
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

function generateQuestion() {
    const ops = ['+', '-', '*', '/'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    if (op === '/') {
    a = a * b; // ensure division has whole result
    }
    const expr = `${a} ${op} ${b}`;
    const answer = Math.floor(eval(expr));
    question = { text: expr, answer };
    document.getElementById('question').textContent = `What is ${expr}?`;
    document.getElementById('answer').value = '';
}

function addBlock() {
    const image = blockImages[Math.floor(Math.random() * blockImages.length)];
    tower.push({ image });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const verticalOffset = Math.max(0, (tower.length - 1) * 60); // total stack height

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
    if (tower.length > 15) {
    if (!starsGenerated) {
        generateStars(50);
        starsGenerated = true;
    }

    for (const star of stars) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    }
    
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

    //Cloud
    for (let i = clouds.length - 1; i >= 0; i--) {
        const c = clouds[i];
        c.x -= c.speed;

        ctx.drawImage(c.img, c.x, c.y + verticalOffset, c.size, c.size);

        if (c.x + c.size < 0) {
            clouds.splice(i, 1);
        }
    }

    // Ground
    ctx.fillStyle = '#90ee90';
    // Ground (shift upward as tower grows)
    ctx.fillRect(0, canvas.height - 300 + verticalOffset, canvas.width, 300);

    // Tower
    const blockOverlap = 60;
    for (let i = 0; i < tower.length; i++) {
    ctx.fillStyle = tower[i].color;
    const x = canvas.width / 2 - 25; // centre of page
    const y = canvas.height - 350 - i * blockOverlap + verticalOffset;

    if (tower[i].image.complete) {
        ctx.drawImage(tower[i].image, x, y, 100, 100);
    } else {
        ctx.fillStyle = 'gray';
        ctx.fillRect(x, y, 100, 100);
    }
    }

    requestAnimationFrame(draw);
}

function startTimer() {
    interval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(interval);
        alert(`Game Over! You reached level ${level}. Tower height: ${tower.length}`);
        const best = Math.max(tower.length, parseInt(localStorage.getItem('mathTowerScore') || '0'));
        localStorage.setItem('mathTowerScore', JSON.stringify({ level, blocks: best }));
        location.reload();
    }
    }, 1000);
}

document.getElementById('answer').addEventListener('input', function () {
    const val = parseInt(this.value);
    if (val === question.answer) {
    sounds.correct.play();
    score++;
    if (score % 5 === 0) {
        level++;
        document.getElementById('level').textContent = level;
        timeLeft += 10;
    }
    document.getElementById('feedback').textContent = 'Correct!';
    addBlock();
    generateQuestion();
    } 
});

function loadProgress() {
    const save = JSON.parse(localStorage.getItem('mathTowerScore'));
    if (save) {
    alert(`Welcome back! Your best is level ${save.level}, height ${save.blocks}`);
    }
}

// Init
loadProgress();
generateQuestion();
addBlock();
for (let i=0; i< 15; i++){
    spawnCloud();
}
draw();
startTimer();

setInterval(() => {
    if (tower.length > 15 && Math.random() < 0.1) {
    spawnShootingStar();
    }
    if (tower.length < 3 && Math.random() < 0.1) spawnCloud(); // 1% chance per frame
}, 3000);  // every 3 seconds
