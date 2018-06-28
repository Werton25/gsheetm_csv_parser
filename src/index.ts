import 'source-map-support/register';
import prettyError from 'pretty-error';

import { Reader, TransactionCsvReader } from './helpers/reader';
import { FILE_PATH } from './constants';
import { Transaction } from './model';

prettyError.start();

(() => {
    const reader: Reader<Transaction[]> = new TransactionCsvReader(FILE_PATH);
    console.log(reader.read());
})();
