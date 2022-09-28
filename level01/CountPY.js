const solution = (s) => {
    let p=0, y=0;

    for (char of s){
        if(char === 'P' || char === 'p') p++;
        if(char === 'Y' || char === 'y') y++;
    }

    return (p === y ? true : false);
}

console.log(solution("pPy"));