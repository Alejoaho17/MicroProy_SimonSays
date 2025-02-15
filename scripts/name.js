function startGame() {
  const nameInput = document.getElementById('name-input');

  if (nameInput.value === '') {
    alert('Por favor, ingrese un nombre');
  } else {
    localStorage.setItem('nombre', nameInput.value);

    window.location.href = '../pages/game.html';
  }
}
