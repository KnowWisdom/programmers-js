const solution = (n) => {
    const arr = String(n).split("");
    
    return arr.reduce((sum, cur)=>{
        return sum + Number(cur);
    },0);
}

solution(123);