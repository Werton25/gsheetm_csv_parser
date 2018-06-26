import { Category } from './enums/category.enum';

export interface Record {
    date: Date;
    amount: number;
    description: string;
    category: Category;
}
