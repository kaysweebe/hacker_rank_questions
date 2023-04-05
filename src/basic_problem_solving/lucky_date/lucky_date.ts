export default function luckyDate(d: string) {
    let date_string = d.replace(/[-]/gi, '')
    if (date_string[0] === '0'){
        date_string = date_string.replace(/^./gi, '')
    }
    return parseInt(date_string) % 4 === 0 || parseInt(date_string) % 7 === 0
}