const prices = {
  1: 10.0,
  2: 18.0,
  3: 24.0,
};

function selectBox(id) {
  document.querySelectorAll('.box').forEach((box, idx) => {
    const radio = box.querySelector('input[type="radio"]');
    if (idx === id - 1) {
      box.classList.add('active');
      radio.checked = true;
    } else {
      box.classList.remove('active');
    }
  });
  document.getElementById('totalPrice').innerText = prices[id].toFixed(2);
}
