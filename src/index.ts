import 'source-map-support/register';
import prettyError from 'pretty-error';

import { CsvReader, Reader } from './util/reader';

prettyError.start();

(() => {
    const reader: Reader = new CsvReader('csv/transactions.tsv');
    console.log(reader.read());
})();
