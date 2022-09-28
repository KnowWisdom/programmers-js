// 약스의 합

const solution = (n) => {
    let sum = 0;

    for(i=1 ; i <= n ; i++){
        if(n % i === 0) sum += i;
    }

    return sum;
}

console.log(solution(5))