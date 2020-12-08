

function add(a, b) {
    return a + b;
}

let Kata1 = add(5, 5);
// console.log(Kata1)


function multiply(a, b) {
    let count = 0;
    let answer = 0;
    while(count < b) {
        answer = add(a, answer);
        count++; 
    }
    return answer;
}

let Kata2 = multiply(10, 4);

// console.log(Kata2)


function power(x, n) {
    let count = 0;
    let answer = 1;
while(count < n) {
    answer = multiply(x, answer);
    count++;
}
return answer;
}

let Kata3 = power(4, 8);
console.log(Kata3);


function factorial (x) {
    let count = 0;
    let answer = 1;
    let decrementingNumber = x;
    while(count < x) {
        answer = multiply(decrementingNumber, answer);
        decrementingNumber--;
        count++;
    }
    return answer;
}

let Kata4 = factorial(5);
console.log(Kata4)


function fibonacci(n) {
    let count = 0;
    let fib = [0, 1]
    while(count < n) {
        console.log(fib)
        fib.push(add(fib[count], fib[count + 1]))
        count++;
    }
return fib [n-1];
}


let kataBonus = fibonacci(8) //should be 13
console.log("Fibonacci - Bonus", kataBonus)