console.log("JavaScript carregado com sucesso!");

const menuToggle = document.getElementById('menu-toggle');
  const menuUl = document.querySelector('.menu ul');

  menuToggle.addEventListener('click', () => {
    menuUl.classList.toggle('aberto');
  });
  
function ajustarPaddingCTA() {
    const header = document.querySelector('header');
    const cta = document.querySelector('.cta');

    if (header && cta) {
      const alturaHeader = header.offsetHeight;
      cta.style.paddingTop = alturaHeader + 'px';
    }
  }

  // Ajusta ao carregar a página
  window.addEventListener('load', ajustarPaddingCTA);

  // Ajusta também se a janela for redimensionada (por exemplo, virar o celular)
  window.addEventListener('resize', ajustarPaddingCTA);

  document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    const parentLi = link.parentElement;
    const isSubmenuParent = parentLi.classList.contains('submenu');

    // Se for pai de submenu, impede de fechar o menu e permite abrir o submenu
    if (isSubmenuParent) {
      e.preventDefault(); // evita pular para #servicos
    } else {
      menuUl.classList.remove('aberto');
    }
  });
});



  

