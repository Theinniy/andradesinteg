console.log("JavaScript carregado com sucesso!");

const menuToggle = document.getElementById('menu-toggle');
  const menuUl = document.querySelector('.menu ul');

  menuToggle.addEventListener('click', () => {
    menuUl.classList.toggle('aberto');
  });