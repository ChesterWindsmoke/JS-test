"use strict";
// import refs from './refs.js';


// const NEW_YEAR = new Date('01.01.2024 00:00');

// const handleTime = () => {
//     const now = new Date();
//     const timeDifference = NEW_YEAR - now;

//     const daysLeft = Math.floor(timeDifference / 86400000);
//     const hoursLeft = Math.floor((timeDifference % 86400000) / 3600000);
//     const minutesLeft = Math.floor((timeDifference % 3600000) / 60000);
//     const secondsLeft = Math.floor((timeDifference % 60000) / 1000);
  
//     attachToElement(refs.functionalTimerEl,
//         { daysLeft, hoursLeft, minutesLeft, secondsLeft });
// };


// const attachToElement = (el, { daysLeft, hoursLeft, minutesLeft, secondsLeft }) => {

//     const timeLeftValue = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`
//     el.textContent = timeLeftValue;

// };

// let timer = setInterval(handleTime, 1000);

// refs.stopTimerEl.addEventListener('click', () => {
//     clearInterval(timer);
// });

// refs.startTimerEl.addEventListener('click', () => {
//     timer = setInterval(handleTime, 1000);
// });



// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve('Success! Value passed to resolve function');
//         }
//         else {
//             reject('Error! Error passed to reject function');
//         }
//     }, 2000);
// });

// console.log('Before promise.then()');

// promise.then(
//     value => {
//         console.log('onResolve call inside promise.then()');
//         console.log(value);
//     },
//     error => {
//         console.log('onReject call inside promise.then()');
//         console.log(error);
//     }
// );

// console.log('After promise.then()')


// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve('Success! Value passed to resolve function');
//         }
//         else {
//             reject('Error! Error passed to reject function');
//         }
//     }, 2000);
// });

// promise
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//     console.log(error);
// });

// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve('Success! Value passed to resolve function');
//         }
//         else {
//             reject('Error! Error passed to reject function');
//         }
//     }, 2000);
// });

// promise.then(value => console.log(value));
// promise.catch(error => console.log(error));
// promise.finally(() => console.log('Promise settled!'))

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
}); 


promise.then(value => {
    console.log(value);
    return value * 2;
})
    .then(value => {
        console.log(value);
        return value * 3;
    })
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('Final task');
    });
