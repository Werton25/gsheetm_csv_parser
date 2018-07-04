import { readFileSync } from 'fs';

const SEPARATOR_ENTER = '\r\n';
const ENCODING = 'utf8';

export function readRows(path: string): string[] {
    const options = {encoding: ENCODING};
    const buffer = readFileSync(path, options);

    return buffer.split(SEPARATOR_ENTER);
}
