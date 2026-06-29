const entryScreen = document.querySelector('#entryScreen');
const homeScreen = document.querySelector('#homeScreen');
const enterBtn = document.querySelector('#enterBtn');
const cardGrid = document.querySelector('#cardGrid');
const viewer = document.querySelector('#viewer');
const viewerImage = document.querySelector('#viewerImage');
const viewerTitle = document.querySelector('#viewerTitle');
const viewerCount = document.querySelector('#viewerCount');
const exitViewer = document.querySelector('#exitViewer');
const prevSlide = document.querySelector('#prevSlide');
const nextSlide = document.querySelector('#nextSlide');
const music = document.querySelector('#music');
const musicToggle = document.querySelector('#musicToggle');
const ambientCanvas = document.querySelector('#ambientCanvas');

const collections = [
  {
    id: 'baby',
    title: 'Baby Now That I Found You',
    subtitle: '17 photos with one hidden song',
    audio: 'assets/collections/Baby-Now-That-I-Found-You/audio/Baby-Now-That-I-Found-You.mp3',
    cover: 'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161434_783_9.jpg',
    images: [
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260626162243_713_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260626162251_716_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260626162253_717_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161411_769_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161414_771_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161415_772_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161418_774_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161419_775_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161420_776_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161421_777_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161423_778_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161429_781_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161434_783_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161436_784_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161437_785_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161442_786_9.jpg',
      'assets/collections/Baby-Now-That-I-Found-You/images/__20260629161449_789_9.jpg',
    ],
  },
  {
    id: 'girls',
    title: 'Girls',
    subtitle: '16 photos with one hidden song',
    audio: 'assets/collections/Girls/audio/Girls.mp3',
    cover: 'assets/collections/Girls/images/__20260629161413_770_9.jpg',
    images: [
      'assets/collections/Girls/images/__20260626162135_698_9.jpg',
      'assets/collections/Girls/images/__20260626162143_699_9.jpg',
      'assets/collections/Girls/images/__20260626162149_700_9.jpg',
      'assets/collections/Girls/images/__20260626162159_703_9.jpg',
      'assets/collections/Girls/images/__20260626162210_706_9.jpg',
      'assets/collections/Girls/images/__20260626162215_708_9.jpg',
      'assets/collections/Girls/images/__20260626162219_709_9.jpg',
      'assets/collections/Girls/images/__20260626162220_710_9.jpg',
      'assets/collections/Girls/images/__20260626162221_711_9.jpg',
      'assets/collections/Girls/images/__20260626162223_712_9.jpg',
      'assets/collections/Girls/images/__20260626162245_714_9.jpg',
      'assets/collections/Girls/images/__20260629161413_770_9.jpg',
      'assets/collections/Girls/images/__20260629161416_773_9.jpg',
      'assets/collections/Girls/images/__20260629161427_780_9.jpg',
      'assets/collections/Girls/images/__20260629161445_787_9.jpg',
      'assets/collections/Girls/images/__20260629161447_788_9.jpg',
    ],
  },
  {
    id: 'love',
    title: 'Love Me Like That',
    subtitle: '11 photos with one hidden song',
    audio: 'assets/collections/Love_Me_Like_That/audio/Love_Me_Like_That.mp3',
    cover: 'assets/collections/Love_Me_Like_That/images/2a205e6564700cb1ec001b10f22aa477.jpg',
    images: [
      'assets/collections/Love_Me_Like_That/images/0bcff27f0314457f4fae7a545b21a677.jpg',
      'assets/collections/Love_Me_Like_That/images/2a205e6564700cb1ec001b10f22aa477.jpg',
      'assets/collections/Love_Me_Like_That/images/84c6bfba93c20d2c3b1e9b85d5c84310.jpg',
      'assets/collections/Love_Me_Like_That/images/cfaafaf5d301596a43c47ae6854b2aa3.jpg',
      'assets/collections/Love_Me_Like_That/images/__20260626162152_701_9.jpg',
      'assets/collections/Love_Me_Like_That/images/__20260626162154_702_9.jpg',
      'assets/collections/Love_Me_Like_That/images/__20260626162203_704_9.jpg',
      'assets/collections/Love_Me_Like_That/images/__20260626162208_705_9.jpg',
      'assets/collections/Love_Me_Like_That/images/__20260626162211_707_9.jpg',
      'assets/collections/Love_Me_Like_That/images/__20260629161425_779_9.jpg',
      'assets/collections/Love_Me_Like_That/images/__20260629161431_782_9.jpg',
    ],
  },
  {
    id: 'almost',
    title: 'Almost Lover',
    subtitle: '7 photos with one hidden song',
    audio: 'assets/collections/Almost_Lover/audio/Almost_Lover.mp3',
    cover: 'assets/collections/Almost_Lover/images/1.jpg',
    images: [
      'assets/collections/Almost_Lover/images/1.jpg',
      'assets/collections/Almost_Lover/images/2.jpg',
      'assets/collections/Almost_Lover/images/3.jpg',
      'assets/collections/Almost_Lover/images/5.jpg',
      'assets/collections/Almost_Lover/images/6.jpg',
      'assets/collections/Almost_Lover/images/7.jpg',
      'assets/collections/Almost_Lover/images/8.jpg',
    ],
  },
];

let activeCollection = null;
let activeIndex = 0;
let slideTimer = null;
let currentAudio = '';

function updateMusicButton() {
  musicToggle.classList.toggle('playing', !music.paused);
  musicToggle.setAttribute('aria-label', music.paused ? '播放音乐' : '暂停音乐');
}

function playAudio(src) {
  if (currentAudio !== src) {
    music.src = src;
    currentAudio = src;
    music.load();
  }
  music.volume = 0.82;
  music.muted = false;
  music.play().then(updateMusicButton).catch(updateMusicButton);
}

function toggleMusic() {
  if (!activeCollection) {
    playAudio(collections[0].audio);
    return;
  }

  if (music.paused) {
    playAudio(activeCollection.audio);
    return;
  }

  music.pause();
  updateMusicButton();
}

function renderCards() {
  cardGrid.innerHTML = collections.map((item, index) => `
    <button class="memory-card" type="button" data-index="${index}">
      <img src="${item.cover}" alt="${item.title}" />
      <span class="card-copy">
        <span class="card-kicker">ROOM ${String(index + 1).padStart(2, '0')}</span>
        <h2>${item.title}</h2>
        <p>${item.subtitle}</p>
      </span>
    </button>
  `).join('');
}

function renderViewer() {
  if (!activeCollection) return;
  viewerImage.src = activeCollection.images[activeIndex];
  viewerTitle.textContent = activeCollection.title;
  viewerCount.textContent = `${activeIndex + 1} / ${activeCollection.images.length}`;
}

function nextImage() {
  if (!activeCollection) return;
  activeIndex = (activeIndex + 1) % activeCollection.images.length;
  renderViewer();
}

function prevImage() {
  if (!activeCollection) return;
  activeIndex = (activeIndex - 1 + activeCollection.images.length) % activeCollection.images.length;
  renderViewer();
}

function openCollection(index) {
  activeCollection = collections[index];
  activeIndex = 0;
  playAudio(activeCollection.audio);
  renderViewer();
  viewer.classList.add('active');
  clearInterval(slideTimer);
  slideTimer = setInterval(nextImage, 3200);
}

enterBtn.addEventListener('click', () => {
  entryScreen.classList.remove('active');
  homeScreen.classList.add('active');
});

cardGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.memory-card');
  if (!card) return;
  openCollection(Number(card.dataset.index));
});

musicToggle.addEventListener('click', toggleMusic);
music.addEventListener('play', updateMusicButton);
music.addEventListener('pause', updateMusicButton);
music.addEventListener('ended', updateMusicButton);
music.addEventListener('error', updateMusicButton);

exitViewer.addEventListener('click', () => {
  viewer.classList.remove('active');
  clearInterval(slideTimer);
});

nextSlide.addEventListener('click', () => {
  nextImage();
  clearInterval(slideTimer);
  slideTimer = setInterval(nextImage, 3200);
});

prevSlide.addEventListener('click', () => {
  prevImage();
  clearInterval(slideTimer);
  slideTimer = setInterval(nextImage, 3200);
});

document.addEventListener('keydown', (event) => {
  if (!viewer.classList.contains('active')) return;
  if (event.key === 'Escape') exitViewer.click();
  if (event.key === 'ArrowRight') nextSlide.click();
  if (event.key === 'ArrowLeft') prevSlide.click();
});

function fitCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  ambientCanvas.width = Math.floor(window.innerWidth * dpr);
  ambientCanvas.height = Math.floor(window.innerHeight * dpr);
  ambientCanvas.style.width = `${window.innerWidth}px`;
  ambientCanvas.style.height = `${window.innerHeight}px`;
  const ctx = ambientCanvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, width: window.innerWidth, height: window.innerHeight };
}

const stars = Array.from({ length: 120 }, () => ({
  x: Math.random(),
  y: Math.random(),
  r: .6 + Math.random() * 1.8,
  p: Math.random() * Math.PI * 2,
}));

function drawAmbient(time) {
  const { ctx, width, height } = fitCanvas();
  const t = time / 1000;
  ctx.clearRect(0, 0, width, height);
  for (const s of stars) {
    const alpha = .28 + Math.sin(t * 1.4 + s.p) * .24;
    ctx.fillStyle = `rgba(255, 247, 220, ${alpha})`;
    ctx.beginPath();
    ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.strokeStyle = 'rgba(125, 232, 255, .14)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 14; i++) {
    const y = height * (.18 + i * .055) + Math.sin(t + i) * 14;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(width * .32, y - 24, width * .62, y + 28, width, y - 8);
    ctx.stroke();
  }
  requestAnimationFrame(drawAmbient);
}

renderCards();
updateMusicButton();
requestAnimationFrame(drawAmbient);
