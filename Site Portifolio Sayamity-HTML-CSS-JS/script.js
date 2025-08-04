// addArt({
//  src: 'caminho/para/imagem.jpg',
//  alt:'descrição',
//  categoria:'ilustracao'
// });

// Primeira galeria
const galleryData = [
 { src: './image/camisa-sabrina-1.png', alt: 'Arte 1' },
 { src: './image/camisa-sabrina-2.png', alt: 'Arte 2' },
 { src: './image/camisa-sabrina-3.png', alt: 'Arte 3' },
 { src: './image/camisa-ken-1.png', alt: 'Arte 4' },
 { src: './image/camisa-kat-1.png', alt: 'Arte 5' },
 { src: './image/camisa-no-1.png', alt: 'Arte 6' },



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
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
  },
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
  breakpoints: {
   768: { slidesPerView: 2 },
   1024: { slidesPerView: 3 },
  }

 });

}

renderGallery(galleryData);

// Efeito de zoom nas imagens

document.addEventListener('click', function (e) {
 const img = e.target;
 if (img.tagName === 'IMG' && img.closest('.swiper-slide')) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = img.src;
  lightbox.classList.remove('hidden');
 }
});

document.querySelector('.lightbox-close').addEventListener('click', () => {
 document.getElementById('lightbox').classList.add('hidden');
});

document.getElementById('lightbox').addEventListener('click', (e) => {
 if (e.target.id === 'lightbox') {
  document.getElementById('lightbox').classList.add('hidden');
 }
});


// segunda galeria

const customGalleryData = [
 { src: './image/banner-1.png', alt: 'Custom Arte 1' },
 { src: './image/banner-2.png', alt: 'Custom Arte 2' },
 { src: './image/banner-3.png', alt: 'Custom Arte 3' },
 { src: './image/banner-4.png', alt: 'Custom Arte 4' },
 { src: './image/banner-5.jpeg', alt: 'Custom Arte 5' },
 { src: './image/banner-6.png', alt: 'Custom Arte 6' },
];

function renderCustomGallery(images) {
 const wrapper = document.getElementById('custom-gallery-wrapper');
 if (!wrapper) return;

 wrapper.innerHTML = '';
 images.forEach(img => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
  wrapper.appendChild(slide);
 });

 new Swiper('.myCustomSwiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
   nextEl: '.custom-next',
   prevEl: '.custom-prev',
  },
  pagination: {
   el: '.custom-pagination',
   clickable: true,
  },
  breakpoints: {
   768: { slidesPerView: 1 },
   1024: { slidesPerView: 2 },
  }
 });

}

renderCustomGallery(customGalleryData);


// Terceiro carrosel

 const worksGalleryData =[
  {src:'./image/work-1.jpeg',alt:'Trabalho 1'},
  {src:'./image/work-2.jpeg',alt:'Trabalho 2'},
  {src:'./image/work-3.jpeg',alt:'Trabalho 3'},
  {src:'./image/work-4.jpeg',alt:'Trabalho 4'},
  {src:'./image/work-5.jpeg',alt:'Trabalho 5'},
  {src:'./image/work-6.jpeg',alt:'Trabalho 6'},
  {src:'./image/work-7.jpeg',alt:'Trabalho 7'},
  {src:'./image/work-8.jpeg',alt:'Trabalho 8'},
  {src:'./image/work-9.jpeg',alt:'Trabalho 9'},
  {src:'./image/work-10.jpeg',alt:'Trabalho 10'},
  {src:'./image/work-11.jpeg',alt:'Trabalho 11'},
 ];

 function renderWorksGallery(images){
  const wrapper = document.getElementById('works-gallery-wrapper');
  if (!wrapper) return;

  wrapper.innerHTML = '';
  images.forEach(img =>{
   const slide = document.createElement('div');
   slide.className = 'swiper-slide';
   slide.innerHTML = `<img src="${img.src}" alt= "${img.alt}" />`;
   wrapper.appendChild(slide);
  });

  new Swiper('.myWorksSwiper',{
   loop:true,
   slidesPerView:2,
   spaceBetween: 30,
   navigation:{
    nextEl:'.works-next',
    prevEl:'.works-prev',
   },
   pagination:{
    el: '.works-pagination',
    clickable: true,
   },
   breakpoints:{
    768:{slidesPerView:1},
    1024:{slidesPerView:2},
   }
  });
 }

 renderWorksGallery(worksGalleryData);

//  criando tabela de precos

const commissions=[
  {tipo:"headshot / pfp", preco:"$20"},
  {tipo:"halfbody", preco:"$35"},
  {tipo:"fullbody", preco:"$50"},
  {tipo:"chibi", preco:"$15"},
  {tipo:"background", preco:"$5"},
  {tipo:"extras", preco:"+$5"},
  {tipo:"extras deluxe", preco:"+$15"},
];

function renderTableComissoes(){
  const tbody = document.getElementById("commission-table-body");
  tbody.innerHTML = "";

  commissions.forEach(item =>{
    const row= document.createElement("tr");
  row.innerHTML = `
    <td>${item.tipo}</td>
    <td>${item.preco}</td>
  `;
  tbody.appendChild(row);
  });
}

renderTableComissoes();