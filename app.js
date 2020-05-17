const  carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners
nextBtn.addEventListener('click',()=>{
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', () => {
  console.log(carouselImages[counter]);
  if (carouselImages[counter].id === 'lastClone'){
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - 2;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone'){
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

  }
});

let readMore = document.getElementById('info');
let moreInfo = document.getElementById('pop-up-info');
let popClose = document.getElementById('popClose');

readMore.onclick = () => {
    moreInfo.style.display = 'block';
};

popClose.onclick = () => {
    moreInfo.style.display = 'none';
};


let getMoreArt = document.getElementById('more-button');
let moreArt = document.getElementById('secondPage');

getMoreArt.onclick = () => {
    moreArt.style.display = 'block';
};
