export default function timeConversion(s: string): string {
    const first_two = s.slice(0,2);
    switch(s.slice(-2)){
        case('AM'): {
            return first_two == '12' ? '00' + s.slice(2, 8) : s.slice(0, 8)
            break
        }
        default: {
            return first_two == '12' ? s.slice(0, 8) : (parseInt(first_two) + 12) + s.slice(2, 8)
            break
        }
            
    }
}