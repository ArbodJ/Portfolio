/**
 * CREATION DES ELEMENTS
 */
// main
let section = document.createElement('section');
let linkPdf = document.createElement('a');
let linkHtml = document.createElement('a');
let linkWebDev = document.createElement('a');
let linkedPdf = document.createElement('p');
let linkedHtml = document.createElement('p');
let linkedWebDev = document.createElement('p');
/**
 * ATTRIBUTS DES ELEMENTS
 */
// main
section.setAttribute('id', 'link');

linkPdf.setAttribute('href', '#');
linkPdf.setAttribute('id', 'pdf');
linkedPdf.setAttribute('class', 'linkClick');
linkedPdf.textContent = 'CV' + ' pdf';


linkHtml.setAttribute('href', 'ProjectCv/index.html');
linkHtml.setAttribute('id', 'html');
linkedHtml.setAttribute('class', 'linkClick');
linkedHtml.textContent = 'CV hmtl';

linkWebDev.setAttribute('href', '#');
linkWebDev.setAttribute('id', 'devWeb');
linkedWebDev.setAttribute('class', 'linkClick');
linkedWebDev.textContent = 'CV web dev';
/**
 * POSITION DES ELEMENTS
 */
// main
section.append(linkPdf, linkHtml, linkWebDev);
linkPdf.append(linkedPdf);
linkHtml.append(linkedHtml);
linkWebDev.append(linkedWebDev);
main.append(section);
/**
 * AFFICHAGE DES ELEMENTS
 */
// Dans la console
console.log(section);
// A l'écran
document.getElementById('main');

