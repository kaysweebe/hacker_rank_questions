export default function twoArrays(k: number, A: number[], B: number[]): string {
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    for(let i = 0; i < A.length; i++){
        if (A[i] + B[i] < k){
            return 'NO'
        }
    }
    return 'YES'
}