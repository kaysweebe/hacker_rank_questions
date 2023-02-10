You will be given a list of integers, arr, and a single integer k. You must create an array of length k from elements of arr such that its unfairness is minimized. Call that array arr'. Unfairness of an array is calculated as: `max(arr') - min(arr')`

Where:
- max denotes the largest integer in arr'
- min denotes the smallest integer in arr'

## Example
arr = [1, 4, 7, 2]
k = 2


Pick any two elements, say 4, 7.
Then max([4, 7]) - min([4, 7]) = 7 - 4 = 3.

Testing for all pairs, the solution max([1,2]) - min([1,2]) = 2 - 1 = 1 provides the minimum unfairness.

Note: Integers in arr' may not be unique.

## Function Description

### maxMin has the following parameter(s):
int k: the number of elements to select
int arr[n]:: an array of integers

### Returns
int: the minimum possible unfairness
