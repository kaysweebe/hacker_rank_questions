export default function birthday(s: number[], d: number, m: number): number {
    let num_cuts = 0
    for(let i = 0; i < s.length; i++){
        let sum = 0
        for( let j = i; j < m + i; j++){
            sum += s[j]
        }
        if(sum === d){
            num_cuts += 1
        }
    }
    return num_cuts
}