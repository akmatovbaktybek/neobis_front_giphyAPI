const searchInput = document.querySelector('#search');
const gifsContainer = document.querySelector('#gifs');

const API_TRENDING_GIFS = "https://api.giphy.com/v1/gifs/trending?api_key=TFbA9Tcoe4RyKaeFZoZxx2QweATyMsnb&limit=25&rating=g";
const API_KEY = 'TFbA9Tcoe4RyKaeFZoZxx2QweATyMsnb';

getGif();

async function getGif() {
   const gifsResponse = await fetch(API_TRENDING_GIFS);
   const gifsData = await gifsResponse.json();

   showGifs(gifsData);
   console.log(gifsData);
}

function showGifs(gifData) {
   gifData.data.forEach((gif) => {
      const gifItem = document.createElement('div');
      gifItem.classList.add('main__gif');
      gifItem.innerHTML = `
      <img class="main__gif-img" src="${gif.images.original.url}" alt="${gif.title}">
      `;
      gifsContainer.appendChild(gifItem);

   })
}