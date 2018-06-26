import 'source-map-support/register';
import prettyError from 'pretty-error';

import { Reader } from './util/reader/reader.interface';
import { CsvReader } from './util/reader/impl/csv.reader';

prettyError.start();

class Runner {
    run(): void {
        const reader: Reader = new CsvReader('csv/transactions.tsv');
        console.log(reader.read());
    }
}

(() => {
    const runner = new Runner();
    runner.run();
})();
