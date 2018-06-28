import { Category } from './enums';

export interface Transaction {
    date: Date;
    amount: number;
    description: string;
    category: Category;
}
