module.exports.foo = async () => {
    const fs = require('fs');
    const readline = require('readline');

    const fileStream_1 = fs.createReadStream('server_1.log');
    const fileStream_2 = fs.createReadStream('server_2.log');
    const fileStream_3 = fs.createReadStream('server_3.log');
    const fileStream_4 = fs.createReadStream('server_4.log');
    const fileStreamOut = fs.createWriteStream('output.log', { flags: 'a' });

    const rl_1 = readline.createInterface({ input: fileStream_1, crlfDelay: Infinity });
    const rl_2 = readline.createInterface({ input: fileStream_2, crlfDelay: Infinity });
    const rl_3 = readline.createInterface({ input: fileStream_3, crlfDelay: Infinity });
    const rl_4 = readline.createInterface({ input: fileStream_4, crlfDelay: Infinity });

    let ob_1;

    let line = await new Promise((resolve) => {
        rl_1.on('line', (line) => {
            resolve(line);
        });
    });
    ob_1 = JSON.parse(line);
    console.log(ob_1.timestamp);

    line = await new Promise((resolve) => {
        rl_1.on('line', (line) => {
            resolve(line);
        });
    });
    ob_1 = JSON.parse(line);
    console.log(ob_1.timestamp);

    // for await (const line of rl_1) {
    //     fileStreamOut.write(`${line}\n`);
    //     console.log(`${line}`);
    // }

    // И записать один общий лог в output.log
};

module.exports.foo();
