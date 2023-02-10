export default function maxMin(k: number, arr: number[]): number {
  arr.sort((a, b) => {
    return a - b;
  });
  let minimumUnfairness = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; i++) {
    let unfairness = arr[i + k - 1] - arr[i];
    if (unfairness == 0) return 0;
    if (unfairness < minimumUnfairness) minimumUnfairness = unfairness;
  }
  return minimumUnfairness;
}
