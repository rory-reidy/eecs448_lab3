let imageArr = ["spider1.jpg", "baby1.jpeg", "spider2.jpg", "baby2.jpg", "spider3.jpeg"];
let count = 0;
//document.getElementById("slideshow").addEventListener('click', switchSlides());
function switchSlides() {
  document.getElementById("slideshow").src = "images/" + imageArr[count];
  if (count < 4)
  {
    count++;
  }
  else
  {
    count = 0;
  }
  
}
