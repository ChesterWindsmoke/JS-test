// 1.Программа приймає на вхід будь який текст:
// - будемо приймати текст через textarea
// - будемо приймати текст після натискання на кнопку
// - знаходимо textarea за допомогую getElementById
// - знаходимо кнопку через querySelector
// - вішаємо на кнопку слухач подій та викликаємо функію по кліку
// - по кліку ф-цію повертає текст який ввів користувач

// 2.Програма проходить по кожному слову цього тексту та аналізує його
// - перебираємо слова
// 3.Програма знаходить в кожному слові найперший унікальний символ який не повторюється
// 4.Програма отримує набір символів (по одному унікальному символу з кожного слова)
// 5.Програма аналізує набір символів та обирає перший унікальний символ який не повторюється в наборі та повертає його

const textAreaEl = document.getElementById('user-text');
const buttonEl = document.querySelector('.send-text-btn'); 

buttonEl.addEventListener('click', handleTextAreaInput);

function textAreaInput () {
    const result = textAreaEl.value;
    const words = result.split(' ');

    return words;
}

function handleTextAreaInput() {
    const words = textAreaInput();

    words.forEach(word => {
        const firstNonRepeatingChar = findFirstNonRepeatingChar(word);
        console.log(firstNonRepeatingChar);
    });
}

function findFirstNonRepeatingChar(word) {
    const charCount = {};

    for (const char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of word) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

// function uniqueSymbol() {
//     const chars = findFirstNonRepeatingChar(word);

//     chars.forEach(char => {
//         console.log(char);
//     });
// }



