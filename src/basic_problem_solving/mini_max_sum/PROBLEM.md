Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

## Function Description

Complete the miniMaxSum function.

miniMaxSum has the following parameter(s):
arr: an array of  integers

Print
Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

### Input Format
A single line of five space-separated integers.

### Output Format
Integer list denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input
[1, 2, 3, 4, 5]

Sample Output
[10, 14]

Explanation
10 is the smallest sum, 14 is the maximum sum
1 + 2 + 3 + 4 = 10
1 + 2 + 3 + 5 = 11
1 + 2 + 4 + 5 = 12
1 + 3 + 4 + 5 = 13
2 + 3 + 4 + 5 = 14