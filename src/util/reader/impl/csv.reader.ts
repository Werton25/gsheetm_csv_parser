import { readFileSync } from 'fs';
import { Reader } from '../reader.interface';

const SEPARATOR_TAB = '\t';
const SEPARATOR_ENTER = '\r\n';

export class CsvReader implements Reader {
    private readonly path: string;
    private readonly map: Map<number, string[]>;

    constructor(path: string) {
        this.path = path;
        this.map = new Map<number, string[]>();
    }

    public read(): Map<number, string[]> {
        const buffer: string = readFileSync(this.path, {encoding: 'utf8'});

        buffer.split(SEPARATOR_ENTER)
            .forEach(this.eachRow.bind(this));

        return this.map;
    }

    private eachRow(value: string, index: number): void {
        this.map.set(index + 1, CsvReader.splitRow(value));
    }

    private static splitRow(row: string): string[] {
        return row.split(SEPARATOR_TAB).filter(value => !!value);
    }
}
