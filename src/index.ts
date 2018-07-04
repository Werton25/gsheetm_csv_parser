import 'source-map-support/register';
import prettyError from 'pretty-error';

import nconf from 'nconf';

import { Config } from './model';

const config: Config = nconf.file('config.json').get();

prettyError.start();

(() => {
    console.log(config);
})();
