export default function miniMaxSum(arr: number[]): number[] {
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
    return [(sum - max), (sum - min)]
}
