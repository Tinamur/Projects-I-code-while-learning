// Example Promise Structure
/*
var p = new Promise (function (resolve,reject) {
    if (statement) {
        resolve('success');
    }else{
        reject('Fail');
    }
})

p.then(function (data) {
    console.log(data)
}).catch(function (error) {
    console.log(error)
})

*/
//----------//
/* Promise multiple then

new Promise (function (resolve,reject) {
    setTimeout(() => {
        resolve(5);
    }, 1500);
}).then(function (number) {
    console.log(number);
    return number*number;
}).then(function (number) {
    console.log(number);
    return number*number;
}).then(function (number) {
    console.log(number);
})
*/

const isMomHappy = true;
const willGetNewPhone = new Promise((resolve,reject)=>{
    if (isMomHappy){
        const phone = {
            name : 'Huawei mate 8',
            price : '1000',
            color : 'silver'
        }
        resolve(phone);
    }else{
        reject('You will have only pain in your life!');
    }
});

const showToFriends = phone=>{
    const message = "Hey Friends this is my new phone "+phone.name;
    return Promise.resolve(message);
}

const askMom = function () {
    willGetNewPhone.then(showToFriends)
    .then(message=>{
        console.log(message);
    })
    .catch(badLuck=>{
        console.log(badLuck);
    })
}

askMom();