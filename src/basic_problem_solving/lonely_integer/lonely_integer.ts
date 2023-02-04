export default function lonelyInteger(a: number[]): number {
    let ans = -1;
    a.forEach((n) => {
        if(a.indexOf(n) == a.lastIndexOf(n)){
            ans = n
        }
    })
    return ans
}