function pangrams(s: string): string {
    // Write your code here
    let found_in_alpha: number[] = Array(26).fill(0)
    s.toLowerCase().split('').forEach((letter) => {
        found_in_alpha[(letter.charCodeAt(0) - 97)] += 1
    })
    return found_in_alpha.indexOf(0) >= 0 ? 'not pangram' : 'pangram'

}