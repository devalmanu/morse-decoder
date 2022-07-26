const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let transferInNum = [];

    let defaultSymbol = {
        '00': '',
        '10': '.',
        '11': '-',
    }

    for (let i = 0; i < expr.length; i += 10) {
        let decoderTens = expr.slice(i, i + 10);
        if (decoderTens === '**********') {
            decoderTens = ' ';
        }
        let letterInNum = [];
        for (let i = 0; i < 10; i += 2) {
            letterInNum.push(decoderTens.slice(i, i + 2));
        }
        transferInNum.push(letterInNum);
    }
    // console.log(transferInNum)

    let transferInMorse = [];

    for (let item of transferInNum) {
        let morseLetter = '';
        item.forEach(symbol => {
            if (symbol in defaultSymbol) {
                morseLetter += defaultSymbol[symbol];
            } else {
                morseLetter += '';
            }
        });
        transferInMorse.push(morseLetter);
    }

    let transfer = '';
    transferInMorse.forEach(symbol => {
        if (symbol in MORSE_TABLE) {
            transfer += MORSE_TABLE[symbol];
        } else {
            transfer += ' ';
        }
    });

    return transfer;
}

module.exports = {
    decode
}