export default function lonelyinteger(a: number[]): number {
    // Write your code here
    let ans = -1;
    a.forEach((n) => {
        if(a.indexOf(n) == a.lastIndexOf(n)){
            ans = n
        }
    })
    return ans
}