export default function matchingStrings(strings: string[], queries: string[]): number[] {
    
    return queries.map((q) => {
        let count = 0
        strings.forEach((i) => {
            if(i == q) count += 1
        })
        return count
    })

}