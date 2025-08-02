// addArt({
//  src: 'caminho/para/imagem.jpg',
//  alt:'descrição',
//  categoria:'ilustracao'
// });

const galleryData = [
 { src: './image/camisa-sabrina-1.png', alt: 'Arte 1' },
 { src: './image/camisa-sabrina-2.png', alt: 'Arte 2' },
 { src: './image/camisa-sabrina-3.png', alt: 'Arte 3' },
];

function renderGallery(images) {

 const wrapper = document.getElementById('gallery-wrapper');
 if (!wrapper) {
  console.error("Elemento #gallery-wrapper não encontrado!");
  return;
 }
 
 wrapper.innerHTML = '';
 images.forEach(img => {

  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
  wrapper.appendChild(slide);

 });

 new Swiper('.mySwiper', {
  loop: true,
  slidePerview: 1,
  spaceBetween: 30,
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
  },
  pagination: {
   el: '.swiper-pagination',
   clickable: true,
  },
  breakpoints: {
   768: { slidePerview: 2 },
   1024: { slidePerview: 3 },
  }

 });

}

renderGallery(galleryData);
