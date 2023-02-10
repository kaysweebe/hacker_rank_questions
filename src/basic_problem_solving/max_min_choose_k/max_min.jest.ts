import maxMin from "./max_min";

describe("Unfairness of array with k chosen elts", () => {
  test("Unfairness is 0", () => {
    expect(maxMin(2, [1, 1, 1, 1])).toEqual(0);
  });

  test("Sparse array", () => {
    expect(
      maxMin(3, [1, 100, 1000, 10000, 1000000, 100000000, 10000000000])
    ).toEqual(999);
  });

  test("Random example", () => {
    expect(maxMin(9, [0, 24, 10, 87, 39, 200, 12, 43, 165])).toEqual(200);
  });
});
