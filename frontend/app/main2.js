import $ from 'jquery';
import reverse from 'lodash.reverse';
import { sum } from './arithmetic1';
import { subtract } from './arithmetic2';

$('body').append(`<div>${reverse([1, 2, 3].map(item => subtract(sum(item, 2), 2))).join(' ')}</div>`);