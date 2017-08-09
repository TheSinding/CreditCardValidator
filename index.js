// Using luhn's algorithm
const cardNumber = '4929932355525654';

const validate = function (creditCard){  
    return new Promise((resolve, reject)=> {
        let odd = 0, 
            even = 0,
            sum = 0;
        if(creditCard.length < 16){
            reject('Not long enough');
        }
        if(creditCard.length > 16){
            reject('Too long');
        }
        let other = true;
        for(let i = creditCard.length - 1; i >= 0; i--){ 
            if(!other){
                let result = 2 * parseInt(creditCard[i], 10); 
                if(result > 9){
                    even += ( result - 9);
                } else {
                    even += result;
                }
                other = true;
            } else {
                odd += parseInt(creditCard[i], 10);
                other = false;
            }
        }
        sum = odd + even; 
       if(sum % 10 === 0 && sum !== 0){
            resolve('This is a valid credit card');
        } else {
            reject('This is an invalid credit card');
        }
   })
};
validate(cardNumber)
    .then(result => {
    console.log(result);
})
.catch(error => console.error(error));
