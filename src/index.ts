import 'source-map-support/register';
import prettyError from 'pretty-error';

import nconf from 'nconf';

import { Config } from './model';
import { log } from './helpers/logger';

const config: Config = nconf.file('config.json').get();

prettyError.start();

(() => {
    log.info(JSON.stringify(config));
})();
