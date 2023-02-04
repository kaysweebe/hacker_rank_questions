function miniMaxSum(arr: number[]): void {
    // Write your code here
    let min = Number.MAX_SAFE_INTEGER
    let max = 0
    let sum = 0
    arr.forEach((n) => {
        if(n < min){
            min = n;
        }
        if ( n > max){
            max = n;    
        }
        sum += n
    })
    console.log((sum - max), (sum - min))
}
