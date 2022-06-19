'use strict';

import './public/scss/main.scss';

import p5 from 'p5';
import { setHTMLTitle } from './helper/setHTMLTitle';

import { sketch } from './sketch';

setHTMLTitle('p5.ts Project');

new p5(sketch);
