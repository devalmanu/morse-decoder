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

    // через цикл разбиваем строку по 10 символом
    for (let i = 0; i < expr.length; i += 10) {
        let decoderTens = expr.slice(i, i + 10);

        let doubleLetterInNum = [];
        // проверка наличия пробела в строке
        // условие: Space in string is **********.
        // if (decoderTens === '**********') {
        //     decoderTens = ' ';
        // }

        // созданную строку по 10 символов прогоняем циклом по 2 символа
        for (let i = 0; i < 10; i += 2) {
            // пушим по 2 символа в массив
            doubleLetterInNum.push(decoderTens.slice(i, i + 2));
        }
        transferInNum.push(doubleLetterInNum);
    }
    // console.log(transferInNum)

    let transferInMorse = [];

    // проходим циклом по элементам созданного массива transferInMorse
    for (let elem of transferInNum) {
        let morseLetter = '';
        // смотрим символы и сравниваем с дефолтными
        elem.forEach(symbol => {
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
        // проверка символа в константе
        if (symbol in MORSE_TABLE) {
            // при наличии такого символа, добавляем его значение в результат transfer
            transfer += MORSE_TABLE[symbol];
        } else {
            // при отсутствии такого символа, добавляем пробул в результат transfer
            transfer += ' ';
        }
    });

    return transfer;
}

module.exports = {
    decode
}