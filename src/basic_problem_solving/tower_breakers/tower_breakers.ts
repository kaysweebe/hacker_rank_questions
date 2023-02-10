function towerBreakers(n: number, m: number): number {
  if (m == 1) {
    return 2;
  } else if (n % 2 == 1) {
    return 1;
  } else {
    return 2;
  }
}
