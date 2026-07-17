if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

const sky = document.getElementById('sky');
const HEART_COUNT = 14;

for (let i = 0; i < HEART_COUNT; i++) {
  const h = document.createElement('span');
  h.className = 'drift';
  h.textContent = '❤';
  h.style.left = Math.random() * 100 + 'vw';
  h.style.fontSize = 16 + Math.random() * 22 + 'px';
  h.style.animationDuration = 10 + Math.random() * 12 + 's';
  h.style.animationDelay = Math.random() * 10 + 's';
  sky.appendChild(h);
}

const popBtn = document.getElementById('popBtn');

popBtn.addEventListener('click', () => {
  const rect = popBtn.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top;

  for (let i = 0; i < 16; i++) {
    const heart = document.createElement('span');
    heart.className = 'burst-heart';
    heart.textContent = '🤍';

    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 140;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - 60;

    heart.style.setProperty('--dx', dx + 'px');
    heart.style.setProperty('--dy', dy + 'px');
    heart.style.left = originX + 'px';
    heart.style.top = originY + 'px';
    heart.style.fontSize = 16 + Math.random() * 14 + 'px';

    document.body.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
  }
});
