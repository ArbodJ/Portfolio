/**
 * Animation du h1
 */
const textAnim = document.querySelector('h1');

// console.log(new Typewriter(textAnim));
new Typewriter(textAnim, {
  loop: true
})
.typeString('Mes quêtes et ')
.pauseFor(300)
.deleteChars(15)
.pauseFor(300)
.typeString('mes defis relevés')
.pauseFor(300)
.deleteChars(17)
.pauseFor(300)
.typeString('depuis 2014 !')
.pauseFor(1000)
.start()
/**
 * Slide
 */
var slide = new Array("../images/certificationlinux.jpg",
                      "../images/certificationhtmlcss.jpg",
                      "../images/certification.jpg",
                      "../images/p1validation.png",
                      "../images/p2validation.png",
                      "../images/p3validation.png",
                      "../images/p4validation.png",
                      "../images/p5validation.png");
var numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if(numero < 0)
    numero = slide.length -1;
  if (numero > slide.length -1)
    numero = 0;
  document.getElementById("slide").src = slide[numero];
}
setInterval("ChangeSlide(1)", 4000);