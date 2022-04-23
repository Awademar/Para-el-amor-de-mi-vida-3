'use strict';
let votonSi = window.document.getElementById('yes');
let votonNo = window.document.getElementById('no');

let partner = prompt('Puedes poner tu nombre si quieres :3');
document.querySelector('.contenedor__titulo').innerHTML += partner + ' ❤';

const zomosNobios = () => {
  // alert('💞Now zomos ParTnEr ' + ${partner} + '💞');
  alert(`esto es algo que habia hecho para ti, pero me bloqueaste justo el dia de nuestro aniversario , me tomo por sorpresa y me hizo sentir muy mal, pero... aun asi te dedico esto , mis sentimientos por ti siguen siendo los mismos  ${partner} 💞`);
  alert('😱Nuestra VoDa Is MañaNa😱');
  location.href = "https://youtu.be/nfezTxgrcUo";
};

const ebitarKCRompaMyBobo = () => {
  votonNo.style.position = 'absolute';
  votonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  votonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

votonSi.addEventListener('click', zomosNobios);
votonNo.addEventListener('mouseover', ebitarKCRompaMyBobo);