const isMomHappy = false;

// First promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('Mom is not happy');
            reject(reason);
        }
    }
);

// Second Promise

async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            let message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone.';

            resolve(message);
        }
    );
};