import { Category } from './enums';

export interface Record {
    date: Date;
    amount: number;
    description: string;
    category: Category;
}
