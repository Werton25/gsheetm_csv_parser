import { readFileSync } from 'fs';
import { Reader } from '../reader.interface';
import { Transaction } from '../../../model';
import { Category } from '../../../model/enums';

const SEPARATOR_TAB = '\t';
const SEPARATOR_ENTER = '\r\n';

const TRANSACTION_DATE_INDEX = 0;
const TRANSACTION_AMOUNT_INDEX = 1;
const TRANSACTION_DESCRIPTION_INDEX = 2;
const TRANSACTION_CATEGORY_INDEX = 3;

export class TransactionCsvReader implements Reader<Transaction[]> {
    private readonly path: string;

    constructor(path: string) {
        this.path = path;
    }

    public read(): Transaction[] {
        const buffer: string = readFileSync(this.path, {encoding: 'utf8'});

        return buffer.split(SEPARATOR_ENTER)
            .map(row => row.split(SEPARATOR_TAB).filter(value => !!value))
            .filter(row => row.length > 3)
            .map(row => {
                return {
                    date: new Date(row[TRANSACTION_DATE_INDEX]),
                    amount: +row[TRANSACTION_AMOUNT_INDEX].slice(0, -2).replace(',', '.'),
                    description: row[TRANSACTION_DESCRIPTION_INDEX],
                    category: row[TRANSACTION_CATEGORY_INDEX].toLowerCase() as Category,
                };
            });
    }
}
