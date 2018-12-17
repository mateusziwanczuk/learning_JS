const box = document.getElementById('js-box');

const emoji = ['💋', '👕', '👖', '👟', '👓', '👗', '👙', '👠', '💕', '💓', '💗', '💋', '💋', '💋', '💋', '💋', '💕', '💓', '💗', '💋', '💋', '💋', '💋', '💋', '💕', '💓', '💗', '💋', '💋', '💋', '💋', '💋',];

box.addEventListener('click', () => {
  const x = document.createElement('div');
  const random = getRandomInt(0,1);
  x.innerText = emoji[getRandomInt(0, emoji.length -1)];
  x.classList.add('love');
  if (random) {
      x.classList.add('loveLeft');
  } else {
    x.classList.add('loveRight');
  }
  document.getElementById('js-box').prepend(x);
});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}