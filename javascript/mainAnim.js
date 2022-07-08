const textAnim = document.querySelector('h1');

// console.log(new Typewriter(textAnim));
new Typewriter(textAnim, {
  loop: true
  //delete: 20;
})
.typeString('Bonjour ')
.pauseFor(300)
.deleteChars(8)
.pauseFor(300)
.typeString('et')
.pauseFor(300)
.deleteChars(2)
.pauseFor(300)
.typeString(' Bienvenue !')
.pauseFor(1000)
.start()