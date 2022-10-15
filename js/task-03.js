const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// function makeGalery(setImages = []) {

//   const ulRef = document.querySelector('ul.gallery');
//   ulRef.classList.add('list')

//   setImages.map(img => {
//     const liRef = document.createElement('li');
//     const imgRef = document.createElement('img');
//     imgRef.alt = img.alt;
//     imgRef.src = img.url;
//     imgRef.classList.add('img');
//     liRef.append(imgRef);
//     return ulRef.insertAdjacentElement("beforeend", liRef)
//   })

// }

// makeGalery(images);

const ulRef = document.querySelector('ul.gallery');
ulRef.classList.add('list')

const imagesRef = images.map(img => `<li><img class="img"alt="${img.alt}"src="${img.url}"/></li>`).join("");
ulRef.insertAdjacentHTML("beforeend", imagesRef);