export default function sockMerchant(ar: number[]): number {
    let num_pairs = 0
    let sock_count: {[index:number]: number} = {}

    ar.forEach((sock) => {
        sock in sock_count ? sock_count[sock] += 1 : sock_count[sock] = 1
    })

    for(const sock in sock_count){
        num_pairs += Math.floor(sock_count[sock] / 2)
    }
    
    return num_pairs
}