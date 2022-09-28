const solution = (n) => {
    return parseInt(String(n).split('').sort((x,y)=>{
        return y-x;
    }).join(""));
}

solution(118372);