export default function pageCount(n: number, p: number): number {
    return n % 2 === 0 && n - p === 1 ? 
        Math.min(Math.floor((n - p) / 2 + 1), Math.floor(p / 2)) : Math.min(Math.floor((n - p) / 2), Math.floor(p / 2))

}