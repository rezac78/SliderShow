var currentIndex=1
function displaySlide(imgIndex){
  currentIndex=imgIndex
  var slides=document.getElementsByClassName("slide");
  var dots=document.getElementsByClassName("dot");
  var slNo=document.getElementsByClassName("slide-no");

  if(currentIndex>slides.length){
    currentIndex=1;
  }
  if(currentIndex<1){
    currentIndex=slides.length
  }
  for(var i=0;i<slides.length;i++){
    slides[i].style.display="none";
    dots[i].className=dots[i].className.replace("active","")
  }
  slides[currentIndex-1].style.display="block";
  dots[currentIndex-1].className="dot active";
  slNo.innerText=currentIndex + '/' +slides.length;
}

displaySlide(1)