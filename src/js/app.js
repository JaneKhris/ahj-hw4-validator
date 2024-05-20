// import GameController from './GameController';
// import GamePlay from './GamePlay';
// import GameState from './GameState';

// const gameState = new GameState();
// const gamePlay = new GamePlay(gameState);
// gamePlay.bindToDOM(document.querySelector('.game_container'));

// const gameController = new GameController(gamePlay);
// gameController.init();

import WidgetCheck from './WidgetCheck';

const widgetCheck = new WidgetCheck();
widgetCheck.bindToDOM(document.querySelector('.widget_container'));
widgetCheck.init();
widgetCheck.listeners();

// const inputNumber = document.querySelector('.input_number');
// const btn = document.querySelector('.validate');
// const iconsArray = Array.from(document.querySelectorAll('.icon'));

// inputNumber.addEventListener('keyup', (e) => {
//     console.log(inputNumber.value);
//     if (getSystem(inputNumber.value)) {
//         activateSystem(getSystem(inputNumber.value))
//     } else {
//         iconsArray.forEach((icon) => {
//             icon.className = 'icon';
//         })
//     }
// })

// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     const cardNumber = getNumber(inputNumber.value)
//     if (cardNumber.length > 13 && cardNumber.length < 17) {
//         if (luhnCheck(cardNumber)) {
//             document.querySelector('.check').textContent = '✔';
//         } else {
//             document.querySelector('.check').textContent = '✖';

//         }
//     } else {
//         alert('Error Number')
//     }
// })

// function activateSystem(name) {
//     iconsArray.forEach((icon) => {
//         if (icon.id == name) {
//             icon.className  = 'icon';
//         } else {
//             icon.className  = 'icon icon_shade';
//         }
//     })
// }
