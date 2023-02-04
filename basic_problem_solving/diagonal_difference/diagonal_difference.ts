function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let first_sum = 0
    let second_sum = 0
    let i = 0
    let j = arr.length - 1
    while (i < arr.length){
        first_sum += arr[i][i]
        second_sum += arr[i][j]
        j -= 1
        i += 1
    }
    return Math.abs(first_sum - second_sum)
}