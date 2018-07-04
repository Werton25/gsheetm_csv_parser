import { Transaction } from '../model';
import { Category } from '../model/enums';

const SEPARATOR_TAB = '\t';

const TRANSACTION_DATE_INDEX = 0;
const TRANSACTION_AMOUNT_INDEX = 1;
const TRANSACTION_DESCRIPTION_INDEX = 2;
const TRANSACTION_CATEGORY_INDEX = 3;

export function mapToTransaction(rows: string[]): Transaction[] {
    return rows.map(row => row.split(SEPARATOR_TAB).filter(Boolean))
        .filter(row => row.length > 3)
        .map(row => ({
                date: new Date(row[TRANSACTION_DATE_INDEX]),
                amount: +row[TRANSACTION_AMOUNT_INDEX].slice(0, -2).replace(',', '.'),
                description: row[TRANSACTION_DESCRIPTION_INDEX],
                category: row[TRANSACTION_CATEGORY_INDEX].toLowerCase() as Category,
            }),
        );
}
