const solution = (x) => {
    let sum = 0;

    for( num of String(x) ){
        sum += parseInt(num);    
    }

    return (x % sum === 0 ? true : false);
}

console.log(solution(11));