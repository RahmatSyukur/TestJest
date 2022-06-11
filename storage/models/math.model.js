function checkOddEven(num) {
    if (typeof num === "string") {
        throw new Error("n must be a number")
    }
    return num % 2 === 0 ? 'even' : 'odd';
}



function sum(a, b) {

    return a + b;
}

function isweekend() {
    return new Date().getDay()
    ;
}

function isleapyear() {
    return new Date().getFullYear()
    ;
}





module.exports = {
    checkOddEven,
    sum,
    isweekend,
    isleapyear,
};
