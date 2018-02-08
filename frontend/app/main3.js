import $ from 'jquery';
import reverse from 'lodash.reverse';
import { sum } from './arithmetic1';


$('body').append(`<div>${reverse([1, 2, 3].map(item => sum(item, 2))).join(' ')}</div>`);
