export default function matchingStrings(strings: string[], queries: string[]): number[] {
    // Write your code here
    let num_matches: number[] = []
    queries.forEach((q) => {
        let count = 0
        strings.forEach((i) => {
            if(i == q) count += 1
        })
        num_matches.push(count)
    })
    return num_matches

}