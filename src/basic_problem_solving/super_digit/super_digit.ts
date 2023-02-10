function superDigitHelper(n: string): number{
    if(n.length === 1){
        let m: number = parseInt(n)
        return m
    }
    
    let sum = 0
    let leftOverDigits = parseInt(n)
    while (leftOverDigits !== 0){
        sum += leftOverDigits % 10
        leftOverDigits = Math.floor(leftOverDigits / 10)
    }
    return superDigitHelper(sum.toString())
}
function superDigit(n: string, k: number): number {
    let arr = n.split('')
    let p = 0
    for(let i = 0; i < arr.length; i++){
        p = p + parseInt(arr[i])
    }
    p *= k
    
    return superDigitHelper(p.toString())
}