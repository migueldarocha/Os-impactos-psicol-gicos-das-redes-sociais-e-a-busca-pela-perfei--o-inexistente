window.addEventListener('DOMContentLoaded', () => {
  const btnOcultar = document.querySelector('button.ocultar.painel');
  const navInvisivel = document.getElementById('Invisível');

  btnOcultar.addEventListener('click', () => {
    if (navInvisivel.style.display === 'none') {
      navInvisivel.style.display = 'block';
      btnOcultar.textContent = 'Ocultar painel';
    } else {
      navInvisivel.style.display = 'none';
      btnOcultar.textContent = 'Mostrar painel';
    }
  });
});
