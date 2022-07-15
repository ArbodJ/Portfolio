/**
 * Slide
 */
var angle = 0;

function carrousel(sign) 
{
  spinner = document.querySelector(".carrousel");
  if(!sign)
  {
    angle = angle + 40
  }
  else
  {
    angle = angle - 40
  }
  spinner.setAttribute("style","transform:rotateY("+ angle +"deg);")
}
setInterval("carrousel(1)", 4000);