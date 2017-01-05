// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback('Voronezh', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp)
//     }
// });
//
// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(25);
//             reject('City not found');
//         }, 1000);
//     })
// }
//
// getTempPromise('Voronezh').then(function (temp) {
//     console.log('promise success', temp)
// }, function (err) {
//     console.log('promise error', err)
// });
//
//


function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number')
        {
            var c = a + b;
            resolve(c);
        } else {
            reject('Wrong type !')
        }
    })
}

addPromise(2, 3).then(function (sum) {
    console.log('SUM: ', sum);
}, function (err) {
    console.log("Error: ", err)
});