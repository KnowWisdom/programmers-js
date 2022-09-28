// 평균 구하기

//* 배열 arr의 평균값을 return하는 함수
const solution = (arr) => {
    return arr.reduce((sum, cur)=>{
        return sum + cur
    }, 0) / arr.length;
}

console.log(solution([5,5]));