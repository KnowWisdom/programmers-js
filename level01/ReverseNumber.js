const solution = (n) => {
    return String(n).split('').reverse().map(element=>{
        return parseInt(element);
    });
}

solution(12345);