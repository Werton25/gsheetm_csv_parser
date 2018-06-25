import csv from 'fast-csv';
import { Stream } from 'stream';

class Runner {
    private stream: Stream;

    constructor() {
        this.stream = new Stream();
    }

    run(): void {
        const csvStream = csv.fromPath('csv/transactions.csv')
            .on('data', Runner.data);

        this.stream.pipe(csvStream);
    }

    private static data(data: string): void {
        console.log(data);
    }
}

(() => {
    const runner = new Runner();
    runner.run();
})();
