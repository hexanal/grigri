import Exponent from 'exponent-core';

import '../scss/styles.scss';

import grigriDevtool from 'components/grigri/grigri-devtool/grigri-devtool';

Exponent
  .register({
    'grigri-devtool': grigriDevtool,
  })
  .autoload([ scroll ])
  .mount(document);

