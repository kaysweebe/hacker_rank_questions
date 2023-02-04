export default function countingSortFrequencyArray(arr: number[]): number[] {
    let freq_array = Array(100).fill(0)
    arr.forEach((n) => freq_array[n] += 1)
    return freq_array
}