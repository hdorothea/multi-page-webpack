import $ from 'jquery';
import { sum } from './arithmetic1';

const sumElement = document.createElement('div');
sumElement.classList.add('sum');
sumElement.textContent = sum(2, 2);
document.body.appendChild(sumElement);

$('body').append(`<div class="second-sum">${sum(3, 5)}</div>`);
