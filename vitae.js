/**
 * CREATION DES ELEMENTS
 */
// header 
let header = document.createElement('header');
let firstName = document.createElement('div');
let titleWork = document.createElement('div');
let lastName = document.createElement('div');
// main
let main = document.createElement('main');
let section = document.createElement('section');
let linkPdf = document.createElement('a');
let linkHtml = document.createElement('a');
let linkWebDev = document.createElement('a');
let linkedPdf = document.createElement('p');
let linkedHtml = document.createElement('p');
let linkedWebDev = document.createElement('p');
// footer
let footer = document.createElement('footer');
let fnd = document.createElement('div');
let find = document.createElement('p');
let lnkFb = document.createElement('a');
let lnkLnkd = document.createElement('a');
let imageFb = document.createElement('img');
let imageLd = document.createElement('img');
let production = document.createElement('p');
let nameProd = document.createElement('span');

/**
 * ATTRIBUTS DES ELEMENTS
 */
// header
firstName.setAttribute('id', 'arbod');
firstName.textContent = 'ARBOD';

titleWork.setAttribute('id', 'career');
titleWork.textContent = 'Développeur Front-End Junior';

lastName.setAttribute('id', 'jerome');
lastName.textContent = 'Jerome';

// main
section.setAttribute('id', 'link');

linkPdf.setAttribute('href', '#');
linkPdf.setAttribute('id', 'pdf');
linkedPdf.setAttribute('class', 'linkClick');
linkedPdf.textContent = 'CV pdf';

linkHtml.setAttribute('href', 'ProjectCv/index.html');
linkHtml.setAttribute('id', 'html');
linkedHtml.setAttribute('class', 'linkClick');
linkedHtml.textContent = 'CV hmtl';

linkWebDev.setAttribute('href', '#');
linkWebDev.setAttribute('id', 'devWeb');
linkedWebDev.setAttribute('class', 'linkClick');
linkedWebDev.textContent = 'CV web dev';

//footer
fnd.setAttribute('id', 'findMe');

find.setAttribute('id', 'find');
find.textContent = 'Ou suis-je ?';

lnkFb.setAttribute('id', 'lnkFcbk');
lnkFb.setAttribute('href', '#');
imageFb.setAttribute('src', 'images/faceBook.png');

lnkLnkd.setAttribute('id', 'lnkLd');
lnkLnkd.setAttribute('href', 'https://www.linkedin.com/in/jerome-arbod-7986b6234/');
imageLd.setAttribute('src', 'images/linkedin.png');


nameProd.setAttribute('id', 'prodSpan');
nameProd = 'A.J.Issa Production\u24df';
production.setAttribute('id', 'prod');
production.textContent = 'Conception et design by : ' + nameProd;

/**
 * POSITION DES ELEMENTS
 */
// header
header.append(firstName, titleWork, lastName);
// main
section.append(linkPdf, linkHtml, linkWebDev);
linkPdf.append(linkedPdf);
linkHtml.append(linkedHtml);
linkWebDev.append(linkedWebDev);
main.append(section);
// footer
footer.append(fnd, production);
fnd.append(find);
find.append(lnkFb);
lnkFb.append(imageFb);
find.append(lnkLnkd);
lnkLnkd.append(imageLd);



/**
 * AFFICHAGE DES ELEMENTS
 */
// Dans la console
console.log(header, main, footer);
// A l'écran
document.body.append(header, main, footer);

