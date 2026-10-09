const muneco = document.querySelector('.cayendo');

window.addEventListener('scroll', () => {
  let bajado = window.scrollY;
  muneco.style.transform = `translate(-50%, ${bajado * 0.1}px) rotate(${bajado * 0.16}deg)`;
});
const dialogos = document.querySelectorAll('.dialogo');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

dialogos.forEach(d => observador.observe(d));