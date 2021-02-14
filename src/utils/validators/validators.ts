
export const required = (value: string) => {
    if (value) return undefined;
    return 'field is required';

}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return `max length should be ${maxLength} symbols`;
    return undefined;
}

export const minLengthCreator = (minLength: number) => (value: string) => {
    if (value && value.length < minLength) return `min length should be ${minLength} symbols`;
    return undefined;
}
