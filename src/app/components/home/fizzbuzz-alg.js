// This algorithm will take in a number as param, and console should log every number from 'num' params to 1
// if the number is number is divisible by '3', log out the word 'fizz' instead
// if the number is number is divisible by '5', log out the word 'buzz' instead
// if the number is number is divisible both by '3' & '5', log out the word 'fizzbuzz'


fizzbuzz = (num) => {
    for (i = 1; i < num; i++) {
        if(i % 3 === 0 && i % 5 === 0 ) {
            console.log('fizzbuzz');
        }
        else if (i % 5 === 0) {
            console.log('buzz');
        }
        else if (i % 3 === 0) {
            console.log('fizz');
        }
        else {
            console.log(i);
        }
    }
}

fizzbuzz(232);