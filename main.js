const mainHeader = document.querySelector('.header')
mainHeader.innerHTML = '<h1>Cześć Gościu! To moja strona domowa.</h1>'

const greet = (name, age) => {
    const result = `Siema ${name}! Fajnie że masz ${age} lat!`;
    console.log(result);
}
greet('Luk', 35);
