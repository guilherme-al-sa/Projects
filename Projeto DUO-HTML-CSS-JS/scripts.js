document.addEventListener('DOMContentLoaded',()=>{

 const artistData =[
  {name:'Seraphine', image: './img/sera.jpg'},
  {name:'Lulu', image: './img/lulu.jpg'},
  {name:'Nami', image: './img/nami.jpg'},
  {name:'Rakan', image: './img/rakan.png'},
  {name:'Rell', image: './img/rell.jpg'},
  {name:'Yumi', image: './img/yumi.jpg'},
  
  

];

const albumsData = [
  {name:'Aphelios', artist: 'teste1', image:'./img/aph.jpg'},
  {name:'Nilah', artist: 'teste2', image:'./img/nilah.jpg'},
  {name:'Rato', artist: 'teste3', image:'./img/rato.jpg'},
  {name:'Singas', artist: 'teste4', image:'./img/sing.jpg'},
  {name:'Varus', artist: 'teste5', image:'./img/varus.jpg'},
  {name:'Renata', artist: 'teste6', image:'./img/renata.jpg'},
  
];

  const artistGrid = document.querySelector('.artists-grid')
  const albumsGrid = document.querySelector('.albums-grid')


  artistData.forEach(artist => {
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')

    artistCard.innerHTML = `
    
      <img src=${artist.image} alt= imagem do ${artist.name}>

      <div>
      <h3>${artist.name}</h3>
      <p>Campeão</p>
      </div>

    `

    artistGrid.appendChild(artistCard)

  })

  albumsData.forEach(album=>{
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')

    albumCard.innerHTML = `
    
      <img src=${album.image} alt= imagem do ${album.name}>

      <div>
      <h3>${album.name}</h3>
      <p>${album.artist}</p>
      </div>
    `

    albumsGrid.appendChild(albumCard)


  })

})


