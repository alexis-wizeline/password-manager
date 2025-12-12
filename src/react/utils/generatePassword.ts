export interface PasswordGeneratorOptions {
    length: number;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
}
// TODO return entropy scale
export const generatePassword = (options: PasswordGeneratorOptions) => {
    const { length } = options;
    const chars: string = allowedChars(options);

    let password = "";
    for (let i = 0; i < length; i++) {
        const random = secureRandom()
        password += chars.charAt(Math.floor(random * chars.length));
    }
    
    return password;
}

const allowedChars = ({ uppercase, numbers,symbols }: PasswordGeneratorOptions) : string => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
        chars += "0123456789";
    }
    if (symbols) {
        chars += "!@#$%^&*()_+-=?^_{|}~";
    }
    return chars;
}

function secureRandom(length = 8): number {
    try {
        const array: Uint8Array = new Uint8Array(length);
        const buffer: Uint8Array = crypto.getRandomValues(array);
        const offset: number = Math.random() < 0.5 ? 0 : buffer.length - length/2;
        const dataView: DataView = new DataView(buffer.buffer);
        const intVal: number = dataView.getUint32(offset, true);
        return intVal / (Math.pow(2, 32) - 1);
    }catch (error){
        console.error("Secure random password failed with: ", error);
        throw error;
    }
}