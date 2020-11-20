import Exponent from 'exponent-core';

import '../scss/styles.scss';
import '../assets/images/box.svg';

import grigriDevtool from 'components/grigri/grigri-devtool/grigri-devtool';

Exponent
  .register({
    'grigri-devtool': grigriDevtool,
  })
  .autoload([ scroll ])
  .mount(document);

