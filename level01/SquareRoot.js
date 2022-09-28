// 정수 제곱근 판별

const solution = (n) => {
    if(Math.sqrt(n) % 1 === 0){
        return (Math.sqrt(n)+1)**2;
    }
    else return -1;
}

console.log(solution(121));

